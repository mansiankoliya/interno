const Admin = require("../models/admin.model");
const Profession = require("../models/professional.model");
const Contact = require("../models/contact.model");
const Blog = require("../models/blog.model");
const Project = require("../models/project.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


exports.login = async (req, res) => {
    try {
        const emailBody = req.body.email;
        const emailData = await Admin.findOne({ email: emailBody });

        if (emailData == null) {

            res.status(404).json({
                message: "Data not exists",
                status: 404,
            })

        } else {

            bcrypt.compare(req.body.password, emailData.password, async (err, data) => {

                if (data) {

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
                            new: true,
                            useFindAndModify: false
                        });

                    res.status(200).json({
                        message: "ADMIN LOGIN SUCCESSFULLY",
                        status: 200,
                        data: dataUpdate
                    });

                } else {
                    res.status(401).json({
                        message: "Password dose not matched",
                        status: 401
                    })
                }
            })

        }

    } catch (error) {

        console.log("admin login:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500,
            error: error.message
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