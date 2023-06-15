const Project = require("../models/project.model");
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
        const projectId = "IP" + randomCode.toString();

        const userData = new Project({
            projectId: projectId,
            name: req.body.name,
            description: req.body.description,
            image: urls,
            client: req.body.client,
            type: req.body.type,
            category: req.body.category,
            tags: req.body.tags,
        });
        const saveData = await userData.save();
        res.status(201).json({
            message: "PROJECT INSERTED SUCCESSFULLY",
            status: 201,
            data: saveData,
        })
    } catch (error) {
        console.log("Project insert error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.update = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const findProjectIdData = await Project.findOne({ projectId: projectId });
        if (findProjectIdData == null) {
            if (req.file != undefined) {
                fs.unlinkSync(req.file.path);
            }
            res.status(404).json({
                message: "PROJECTID CANNOT MATCH",
                status: 404,
            });
        } else {
            if (req.files == undefined || req.files.length == 0) {
                const dataUpdate = await Project.findOneAndUpdate(
                    {
                        projectId: projectId
                    },
                    {
                        name: req.body.name,
                        description: req.body.description,
                        client: req.body.client,
                        type: req.body.type,
                        category: req.body.category,
                        tags: req.body.tags,
                    }, {
                    new: true
                });
                res.status(201).json({
                    message: "PROJECT UPDATED SUCCESSFULLY",
                    status: 201,
                    data: dataUpdate
                });
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
                const dataUpdate = await Project.findOneAndUpdate(
                    {
                        projectId: projectId
                    },
                    {
                        name: req.body.name,
                        description: req.body.description,
                        image: urls,
                        client: req.body.client,
                        type: req.body.type,
                        category: req.body.category,
                        tags: req.body.tags,
                    }, {
                    new: true
                });
                res.status(201).json({
                    message: "Project UPDATED SUCCESSFULLY",
                    status: 201,
                    data: dataUpdate
                })
            }
        }
    } catch (error) {
        console.log("Project update error", error);
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
        const ProjectData = await Project.find().skip(skip).limit(limit);
        const count = await Project.find().count();
        if (ProjectData.length == 0) {
            res.status(404).json({
                message: "AT THIS PAGE PROJECT DATA CANNOT AVAILABLE",
                total_records: `TOTAL RECORDS ARE ${count}`,
                status: 404,
            });
        } else {
            res.status(200).json({
                message: "PROJECT DATA LISTED",
                status: 200,
                total_records: count,
                total_pages: Math.ceil(count / limit),
                current_page: Number(page),
                data_limit: Number(limit),
                data: ProjectData,
            });
        }
    } catch (error) {
        console.log("Project list error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.one = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const projectIdData = await Project.findOne({ projectId: projectId });
        if (projectIdData == null) {
            res.status(404).json({
                message: "PROJECTID CANNOT MATCH",
                status: 404
            });
        } else {
            res.status(200).json({
                message: "PROJECT DATA GET SUCCESSFULLY",
                status: 200,
                data: projectIdData
            });
        }
    } catch (error) {
        console.log("find one:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.deleteP = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const projectDeletedData = await Project.findOneAndDelete({ projectId: projectId });
        if (projectDeletedData == null) {
            res.status(404).json({
                message: "PROJECTID CANNOT MATCH",
                status: 404
            });
        } else {
            res.status(200).json({
                message: "PROJECT DATA DELETED SUCCESSFULLY",
                status: 200
            });
        }
    } catch (error) {
        console.log("deleteProject error:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.category = async (req, res) => {
    try {
        let caseOver1 = 0, caseOver2 = 0, caseOver3 = 0, caseOver4 = 0, caseOver5 = 0, caseOver6 = 0;
        let cat1 = 0, cat2 = 0, cat3 = 0, cat4 = 0, cat5 = 0, cat6 = 0;
        const lastData = await Project.find().sort({ _id: -1 });
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
                case 6:
                    if (caseOver6 == 0) {
                        cat6 = lastData[i];
                        caseOver6 = 1;
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
            category_6: cat6,
        })
    } catch (error) {
        console.log("Project category error:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.catList = async (req, res) => {
    try {
        const catData = await Project.find({ category: req.body.category });
        if (catData.length == 0) {
            res.status(404).json({
                message: "THIS CATEGORY DATA CANNOT AVAILABLE",
                status: 404
            })
        } else {
            res.status(200).json({
                message: "CATEGORY DATA GET SUCCESSFULLY",
                status: 200,
                total_data: catData.length,
                data: catData
            });
        }
    } catch (error) {
        console.log("Project catList error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}