const Service = require("../models/service.model");
const cloudinary = require('../helper/cloudinary.helper');
// const upload = require("../helper/multer.helper");
const fs = require("fs");

exports.insert = async (req, res) => {
    try {
        const cloudinaryVideoByService = async (pathLink) => {
            return new Promise(resolve => {
                cloudinary.uploader.upload(pathLink, {
                    resource_type: "video"
                },
                    (err, video) => {
                        if (err) {
                            fs.unlinkSync(pathLink);
                            return res.status(404).json({
                                message: "PLEASE INSERT ONLY mp4 VIDEO FORMAT",
                                status: 404,
                            });
                        } else {
                            fs.unlinkSync(pathLink);
                            resolve(video.secure_url);
                        }
                    })
            });
        };
        console.log("req.cv",req.cv);
        console.log("req.cv",req.file);
        const { path } = req.file;
        const videoLink = await cloudinaryVideoByService(path);
/*
{
  fieldname: 'video',
  originalname: 'Aditya Resume.pdf',
  encoding: '7bit',
  mimetype: 'application/pdf',
  destination: './helper/uploads',
  filename: '1680081202070-Aditya Resume.pdf',
  path: 'helper\\uploads\\1680081202070-Aditya Resume.pdf',
  size: 236731
}
*/
        const randomCode = Math.floor(Math.random() * 8999) + 1000;
        const serviceId = "IS" + randomCode.toString();

        const serviceData = new Service({
            serviceId: serviceId,
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
            video: videoLink,
            status: req.body.status,
        });
        const saveData = await serviceData.save();
        res.status(201).json({
            message: "SERVICE INSERTED SUCCESSFULLY",
            status: 201,
            data: saveData,
        });
    } catch (error) {
        console.log("Service insert error" , error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.update = async (req, res) => {
    try {
        const serviceId = req.params.serviceId;
        const ServiceIdData = await Service.findOne({ serviceId: serviceId });
        if (ServiceIdData == null) {
            if (req.file != undefined) {
                fs.unlinkSync(req.file.path);
            }
            res.status(404).json({
                message: "UNIQUEID CANNOT MATCH",
                status: 404,
            });
        } else {
            if (req.file == undefined) {
                const dataUpdate = await Service.findOneAndUpdate(
                    {
                        serviceId: serviceId
                    },
                    {
                        name: req.body.name,
                        title: req.body.title,
                        description: req.body.description,
                        status: req.body.status,
                    }, {
                    new: true
                });
                res.status(201).json({
                    message: "PROFESSIONAL UPDATED SUCCESSFULLY",
                    status: 201,
                    data: dataUpdate
                });
            } else {
                const cloudinaryVideoByService = async (pathLink) => {
                    return new Promise(resolve => {
                        cloudinary.uploader.upload(pathLink, {
                            resource_type: "video"
                        },
                            (err, video) => {
                                if (err) {
                                    fs.unlinkSync(pathLink);
                                    return res.status(404).json({
                                        message: "PLEASE INSERT ONLY mp4 VIDEO FORMAT",
                                        status: 404,
                                    });
                                } else {
                                    fs.unlinkSync(pathLink);
                                    resolve(video.secure_url);
                                }
                            })
                    });
                };
                const { path } = req.file;
                const videoLink = await cloudinaryVideoByService(path);

                const dataUpdate = await Service.findOneAndUpdate(
                    {
                        serviceId: serviceId
                    },
                    {
                        name: req.body.name,
                        title: req.body.title,
                        description: req.body.description,
                        video: videoLink,
                        status: req.body.status,
                    }, {
                    new: true
                });
                res.status(201).json({
                    message: "PROFESSIONAL UPDATED SUCCESSFULLY",
                    status: 201,
                    data: dataUpdate
                });
            }
        }
    } catch (error) {
        console.log("Service update error", error);
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
        const serviceData = await Service.find().skip(skip).limit(limit).select({ name: 1, title: 1, _id: 0 });
        const count = await Service.find().count();
        if (serviceData.length == 0) {
            res.status(404).json({
                message: "AT THIS PAGE SERVICE DATA CANNOT AVAILABLE",
                total_records: `TOTAL RECORDS ARE ${count}`,
                status: 404,
            });
        } else {
            res.status(200).json({
                message: "SERVICE DATA LISTED",
                status: 200,
                total_records: count,
                total_pages: Math.ceil(count / limit),
                current_page: Number(page),
                data_limit: Number(limit),
                data: serviceData,
            });
        }
    } catch (error) {
        console.log("Service list error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.one = async (req, res) => {
    try {
        const serviceId = req.params.serviceId;
        const serviceIdData = await Service.findOne({ serviceId: serviceId });
        if (serviceIdData == null) {
            res.status(404).json({
                message: "SERVICEID CANNOT MATCH",
                status: 404,
            });
        } else {
            res.status(200).json({
                message: "SERVICE DATA GET SUCCESSFULLY",
                status: 200,
                data: serviceIdData,
            });
        }
    } catch (error) {
        console.log("Service one error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};