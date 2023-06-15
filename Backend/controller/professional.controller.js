const Professional = require("../models/professional.model");
const cloudinary = require('../helper/cloudinary.helper');
const fs = require("fs");

exports.insert = async (req, res) => {
    try {
        const email = req.body.email;
        const emailData = await Professional.findOne({ email: email });
        if (emailData != null) {
            if (req.file != undefined) {
                fs.unlinkSync(req.file.path);
            }
            res.status(404).json({
                message: "THIS EMAIL ALREADY EXISTED",
                status: 404,
            });
        } else {
            const cloudinaryVideoByService = async (pathLink) => {
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
            console.log("req.cv", req.cv);
            console.log("req.cv", req.file);
            const { path } = req.file;
            const imageLink = await cloudinaryVideoByService(path);

            const randomCode = Math.floor(Math.random() * 899999) + 100000;
            const uniqueId = "Int" + randomCode.toString();

            const professionalData = new Professional({
                uniqueId: uniqueId,
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                mobile: req.body.mobile,
                image: imageLink,
                proffesion: req.body.proffesion,
                bio: req.body.bio,
                country: req.body.country,
                linkedIn: req.body.linkedIn,
                twitter: req.body.twitter,
                instragram: req.body.instragram,
                status: req.body.status
            });
            const saveData = await professionalData.save();
            res.status(201).json({
                message: "PROFESSIONAL INSERT SUCCESSFULLY",
                status: 201,
                data: saveData,
            });
        }
    } catch (error) {
        console.log("Profession insert error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.update = async (req, res) => {
    try {
        const uniqueId = req.params.uniqueId;
        const findUniqueIdData = await Professional.findOne({ uniqueId: uniqueId });
        if (findUniqueIdData == null) {
            if (req.file != undefined) {
                fs.unlinkSync(req.file.path);
            }
            res.status(404).json({
                message: "UNIQUEID CANNOT MATCH",
                status: 404,
            });
        } else {
            const email = req.body.email;
            const emailData = await Professional.findOne({ email: email });
            if (emailData != null) {
                if (req.file != undefined) {
                    fs.unlinkSync(req.file.path);
                }
                res.status(404).json({
                    message: "THIS EMAIL ALREADY EXISTED",
                    status: 404,
                });
            } else {
                if (req.file == undefined || req.file.length == 0) {
                    const dataUpdate = await Professional.findOneAndUpdate(
                        {
                            uniqueId: uniqueId
                        },
                        {
                            name: req.body.name,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            mobile: req.body.mobile,
                            proffesion: req.body.proffesion,
                            country: req.body.country,
                            linkedIn: req.body.linkedIn,
                            twitter: req.body.twitter,
                            instragram: req.body.instragram,
                            status: req.body.status
                        }, {
                        new: true
                    });
                    res.status(201).json({
                        message: "PROFESSIONAL UPDATED SUCCESSFULLY",
                        status: 201,
                        data: dataUpdate
                    })
                } else {
                    const cloudinaryVideoByService = async (pathLink) => {
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
                    const { path } = req.file;
                    const imageLink = await cloudinaryVideoByService(path);

                    const dataUpdate = await Professional.findOneAndUpdate(
                        {
                            uniqueId: uniqueId
                        },
                        {
                            name: req.body.name,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            mobile: req.body.mobile,
                            image: imageLink,
                            proffesion: req.body.proffesion,
                            country: req.body.country,
                            linkedIn: req.body.linkedIn,
                            twitter: req.body.twitter,
                            instragram: req.body.instragram,
                            status: req.body.status
                        }, {
                        new: true
                    });
                    res.status(201).json({
                        message: "PROFESSIONAL UPDATED SUCCESSFULLY",
                        status: 201,
                        data: dataUpdate
                    })
                }
            }
        }
    } catch (error) {
        console.log("Profession update error", error);
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
        const professionalData = await Professional.find().skip(skip).limit(limit);
        const count = await Professional.find().count();
        res.status(200).json({
            message: "PROFESSIONAL DATA LISTED SUCCESSFULLY",
            status: 200,
            total_records: count,
            total_pages: Math.ceil(count / limit),
            current_page: Number(page),
            data_limit: Number(limit),
            data: professionalData,
        });
    } catch (error) {
        console.log("Profession list error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.one = async (req, res) => {
    try {
        const uniqueId = req.params.uniqueId;
        const uniqueIdData = await Professional.findOne({ uniqueId: uniqueId });
        if (uniqueIdData == null) {
            res.status(404).json({
                message: "UNIQUEID CANNOT MATCH",
                status: 404
            });
        } else {
            res.status(200).json({
                message: "PROFESSIONAL DATA GET SUCCESSFULLY",
                status: 200,
                data: uniqueIdData
            });
        }
    } catch (error) {
        console.log("Profession one error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.deletePR = async (req, res) => {
    try {
        const uniqueIdParams = req.params.uniqueId;
        const professionalDeletedData = await Professional.findOneAndDelete({ uniqueId: uniqueIdParams });
        if (professionalDeletedData == null) {
            res.status(404).json({
                message: "UNIQUEID CANNOT MATCH",
                status: 404
            });
        } else {
            res.status(200).json({
                message: "PROFESSIONAL DATA DELETED SUCCESSFULLY",
                status: 200,
            });
        }
    } catch (error) {
        console.log("Profession deletePR error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500,
        })
    }
};

