const Admin = require("../models/admin.model");
const Profession = require("../models/professional.model");
const Contact = require("../models/contact.model");
const Blog = require("../models/blog.model");
const Project = require("../models/project.model");
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const emailBody = req.body.email;
        const emailData = await Admin.findOne({ email: emailBody });
        console.log(":emailData", emailData);
        if (emailData == null) {
            res.status(404).json({
                message: "PLEASE CHECK EMAIL",
                status: 404,
            });
        } else {
            const usernameBody = req.body.username;
            if (usernameBody != emailData.username) {
                res.status(404).json({
                    message: "PLEASE CHECK USERNAME",
                    status: 404,
                });
            } else {
                const token = await jwt.sign({ id: emailData._id }, process.env.SECRET_KEY);
                const dataUpdate = await Admin.findByIdAndUpdate(
                    {
                        _id: emailData._id
                    },
                    {
                        $set: {
                            token: token
                        }
                    },
                    {
                        new: true
                    });
                res.status(201).json({
                    message: "ADMIN LOGIN SUCCESSFULLY",
                    status: 201,
                    data: dataUpdate
                });
            }
        }
    } catch (error) {
        console.log("admin login:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.adminContact = async (req, res) => {
    try {
        const count = await Contact.find().count();
        res.status(200).json({
            message: "CONTACT DATA LISTED",
            status: 200,
            total_records: count,
        });
    } catch (error) {
        console.log("list:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.adminProfession = async (req, res) => {
    try {
        const count = await Profession.find().count();
        res.status(200).json({
            message: "Profession DATA LISTED",
            status: 200,
            total_records: count,
        });
    } catch (error) {
        console.log("list:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.adminBlog = async (req, res) => {
    try {
        const count = await Blog.find().count();
        res.status(200).json({
            message: "Blog DATA LISTED",
            status: 200,
            total_records: count,
        });
    } catch (error) {
        console.log("list:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.adminProject = async (req, res) => {
    try {
        const count = await Project.find().count();
        res.status(200).json({
            message: "Project DATA LISTED",
            status: 200,
            total_records: count,
        });
    } catch (error) {
        console.log("list:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};