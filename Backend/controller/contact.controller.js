const Contact = require("../models/contact.model");

exports.insert = async (req, res) => {
    try {
        const email = req.body.email;

        const emailData = await Contact.findOne({ email: email });

        if (emailData != null) {
            res.status(406).json({
                message: "THIS EMAIL ALREADY EXISTED",
                status: 406,
            });
        } else {

            const contactData = new Contact({
                name: req.body.name,
                email: email,
                subject: req.body.subject,
                phone: req.body.phone,
                message: req.body.message,
            });

            const saveData = await contactData.save();

            res.status(201).json({
                message: "CONTACT INSERTED SUCCESSFULLY",
                status: 201,
                data: saveData,
            })

        }
    } catch (error) {
        console.log("Contact insert error", error);
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
        const contactData = await Contact.find().skip(skip).limit(limit);
        const count = await Contact.find().count();
        res.status(200).json({
            message: "CONTACT DATA LISTED",
            status: 200,
            total_records: count,
            total_pages: Math.ceil(count / limit),
            current_page: Number(page),
            data_limit: Number(limit),
            data: contactData,
        });
    } catch (error) {
        console.log("Contact list error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.deleteC = async (req, res) => {
    try {
        const _idParams = req.params._id;
        const contactDeletedData = await Contact.findByIdAndDelete({ _id: _idParams });
        if (contactDeletedData == null) {
            res.status(404).json({
                message: "CONTACT ID CANNOT MATCH",
                status: 404
            });
        } else {
            res.status(200).json({
                message: "CONTACT DATA DELETED SUCCESSFULLY",
                status: 200
            });
        }
    } catch (error) {
        console.log("Contact deleteC error", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        });
    }
};