const Blog = require("../models/blog.model");
const cloudinary = require('../helper/cloudinary.helper');
const fs = require("fs");

exports.insert = async (req, res) => {
    try {
        const cloudinaryImageUploadMethod = async (pathLink) => {
            return new Promise(resolve => {
                cloudinary.uploader.upload(pathLink, {
                    resource_type: "image"
                },
                    (err, image) => {
                        if (err) {
                            fs.unlinkSync(pathLink);
                            return res.status(404).json({
                                message: "PLEASE INSERT ONLY jpeg/jpg/png IMAGE FORMAT",
                                status: 404,
                            });
                        } else {
                            fs.unlinkSync(pathLink);
                            resolve(image.secure_url);
                        }
                    })
            });
        };

        const urls = [];
        const filesData = req.files;
        for (const file of filesData) {
            const { path } = file;
            const imageLink = await cloudinaryImageUploadMethod(path);
            urls.push(imageLink);
        };

        const randomCode = Math.floor(Math.random() * 899999) + 100000;
        const uniqueId = "IB" + randomCode.toString();

        let objectDate = new Date();
        let day = objectDate.getDate();
        let month = objectDate.getMonth();
        let year = objectDate.getFullYear();
        month = month + 1;
        if (day < 10) { day = '0' + day; }
        if (month < 10) { month = `0${month}`; }
        const insertDataDate = `${year}-${month}-${day}`;

        const blogData = new Blog({
            uniqueId: uniqueId,
            title: req.body.title,
            image: urls,
            description: req.body.description,
            category: req.body.category,
            date: insertDataDate,
            tags: req.body.tags,
            status: req.body.status,
        });
        const saveData = await blogData.save();
        res.status(201).json({
            message: "BLOG INSERTED SUCCESSFULLY",
            status: 201,
            data: saveData,
        });
    } catch (error) {
        console.log("Blog insert error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.update = async (req, res) => {
    try {
        const uniqueId = req.params.uniqueId;
        const findUniqueIdData = await Blog.findOne({ uniqueId: uniqueId });
        if (findUniqueIdData == null) {
            if (req.file != undefined) {
                fs.unlinkSync(req.file.path);
            }
            res.status(404).json({
                message: "UNIQUEID CANNOT MATCH",
                status: 404,
            });
        } else {
            if (req.files == undefined || req.files.length == 0) {
                const dataUpdate = await Blog.findOneAndUpdate(
                    {
                        uniqueId: uniqueId
                    },
                    {
                        title: req.body.title,
                        description: req.body.description,
                        category: req.body.category,
                        tags: req.body.tags,
                        status: req.body.status,
                    }, {
                    new: true
                });
                res.status(201).json({
                    message: "BLOG UPDATED SUCCESSFULLY",
                    status: 201,
                    data: dataUpdate
                })
            } else {
                const cloudinaryImageUploadMethod = async (pathLink) => {
                    return new Promise(resolve => {
                        cloudinary.uploader.upload(pathLink, {
                            resource_type: "image"
                        },
                            (err, image) => {
                                if (err) {
                                    fs.unlinkSync(pathLink);
                                    return res.status(404).json({
                                        message: "PLEASE INSERT ONLY jpeg/jpg/png IMAGE FORMAT",
                                        status: 404,
                                    });
                                } else {
                                    fs.unlinkSync(pathLink);
                                    resolve(image.secure_url);
                                }
                            })
                    });
                };

                const urls = [];
                const filesData = req.files;
                for (const file of filesData) {
                    const { path } = file;
                    const imageLink = await cloudinaryImageUploadMethod(path);
                    urls.push(imageLink);
                };
                const dataUpdate = await Blog.findOneAndUpdate(
                    {
                        uniqueId: uniqueId
                    },
                    {
                        title: req.body.title,
                        image: urls,
                        description: req.body.description,
                        category: req.body.category,
                        tags: req.body.tags,
                        status: req.body.status,
                    }, {
                    new: true
                });
                res.status(201).json({
                    message: "BLOG UPDATED SUCCESSFULLY",
                    status: 201,
                    data: dataUpdate
                })
            }
        }
    } catch (error) {
        console.log("Blog update error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.list = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        const skip = (page - 1) * limit;
        const blogData = await Blog.find().skip(skip).limit(limit);
        const count = await Blog.find().count();
        if (blogData.length == 0) {
            res.status(404).json({
                total_records: `TOTAL RECORDS ARE ${count}`,
                message: "AT THIS PAGE BLOG DATA CANNOT AVAILABLE",
                status: 404,
            });
        } else {
            res.status(200).json({
                message: "BLOG DATA LISTED SUCCESSFULLY",
                status: 200,
                total_records: count,
                total_pages: Math.ceil(count / limit),
                current_page: Number(page),
                data_limit: Number(limit),
                data: blogData,
            });
        }
    } catch (error) {
        console.log("Blog list error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.one = async (req, res) => {
    try {
        const uniqueId = req.params.uniqueId;
        const uniqueIdData = await Blog.findOne({ uniqueId: uniqueId });
        if (uniqueIdData == null) {
            res.status(404).json({
                message: "UNIQUEID CANNOT MATCH",
                status: 404
            });
        } else {
            res.status(200).json({
                message: "BLOG DATA GET SUCCESSFULLY",
                status: 200,
                data: uniqueIdData
            });
        }
    } catch (error) {
        console.log("Blog one error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        });
    }
};

exports.latest = async (req, res) => {
    try {
        const blogData = await Blog.find().sort({ _id: -1 });
        if (blogData.length == 0) {
            res.status(404).json({
                message: "BLOG DATA CANNOT AVAILABLE",
                status: 404
            })
        } else {
            res.status(200).json({
                message: "LATEST BLOG DATA GET SUCCESSFULLY",
                status: 200,
                data: blogData[0]
            })
        }
    } catch (error) {
        console.log("Blog latest error", error);
        res.status(500).json({
            message: "SOMETHING WENT WRONG",
            status: 500
        })
    }
};

exports.deleteB = async (req, res) => {
    try {
        const uniqueIdParams = req.params.uniqueId;
        const blogDeletedData = await Blog.findOneAndDelete({ uniqueId: uniqueIdParams });
        console.log("blogDeletedData", blogDeletedData);
        if (blogDeletedData == null) {
            res.status(404).json({
                message: "UNIQUEID CANNOT MATCH",
                status: 404
            })
        } else {
            res.status(200).json({
                message: "BLOG DATA DELETED SUCCESSFULLY",
                status: 200
            })
        }
    } catch (error) {
        console.log("Blog deleteB error:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.category = async (req, res) => {
    try {
        let caseOver1 = 0, caseOver2 = 0, caseOver3 = 0, caseOver4 = 0, caseOver5 = 0;
        let cat1 = 0, cat2 = 0, cat3 = 0, cat4 = 0, cat5 = 0;
        const lastData = await Blog.find().sort({ _id: -1 });
        for (let i = 0; i < lastData.length; i++) {
            const element = lastData[i].category;
            switch (element) {
                case 1:
                    if (caseOver1 == 0) {
                        cat1 = lastData[i];
                        caseOver1 = 1;
                    }
                    continue;
                case 2:
                    if (caseOver2 == 0) {
                        cat2 = lastData[i];
                        caseOver2 = 1;
                    }
                    continue;
                case 3:
                    if (caseOver3 == 0) {
                        cat3 = lastData[i];
                        caseOver3 = 1;
                    }
                    continue;
                case 4:
                    if (caseOver4 == 0) {
                        cat4 = lastData[i];
                        caseOver4 = 1;
                    }
                    continue;
                case 5:
                    if (caseOver5 == 0) {
                        cat5 = lastData[i];
                        caseOver5 = 1;
                    }
                    continue;
            }
        }
        res.status(200).json({
            message: "DATA GET SUCCESSFULLY",
            status: 200,
            category_1: cat1,
            category_2: cat2,
            category_3: cat3,
            category_4: cat4,
            category_5: cat5,
        })
    } catch (error) {
        console.log("Project category error:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};