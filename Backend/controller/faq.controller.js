const Faq = require("../models/faq.model");

exports.insert = async (req, res) => {
    try {
        const typeBody = req.body.type;
        const totalFaq = await Faq.find({ type: typeBody });
        if (typeBody == 1) {
            console.log(totalFaq.length);
            if (totalFaq.length >= 0 && totalFaq.length < 5) {
                const faqData = new Faq({
                    question: req.body.question,
                    answer: req.body.answer,
                    type: req.body.type,
                });
                const saveData = await faqData.save();
                res.status(201).json({
                    message: "FAQ INSERTED SUCCESSFULLY",
                    status: 201,
                    data: saveData,
                });
            } else {
                res.status(404).json({
                    message: "YOU CANNOT INSERT MORE THAN 5 QUESTIONS",
                    status: 404,
                });
            }
        } else {
            if (totalFaq.length >= 0 && totalFaq.length < 5) {
                const faqData = new Faq({
                    question: req.body.question,
                    answer: req.body.answer,
                    type: req.body.type,
                });
                const saveData = await faqData.save();
                res.status(201).json({
                    message: "FAQ INSERTED SUCCESSFULLY",
                    status: 201,
                    data: saveData,
                });
            } else {
                res.status(404).json({
                    message: "YOU CANNOT INSERT MORE THAN 5 QUESTIONS",
                    status: 404,
                });
            }
        }
    } catch (error) {
        console.log("insert:" + error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.update = async (req, res) => {
    try {
        const faq_id = req.params.faq_id;
        const dataUpdate = await Faq.findByIdAndUpdate(
            {
                _id: faq_id
            },
            {
                question: req.body.question,
                answer: req.body.answer,
                type: req.body.type,
            },
            {
                new: true
            });
        if (dataUpdate == null) {
            res.status(404).json({
                message: "FAQ ID CANNOT MATCH",
                status: 404,
            });
        } else {
            res.status(201).json({
                message: "FAQ UPDATED SUCCESSFULLY",
                status: 201,
                data: dataUpdate
            });
        }
    } catch (error) {
        console.log("update:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.list = async (req, res) => {
    try {
        const faqData = await Faq.find().select({ question: 1, _id: 0 });
        const count = await Faq.find().count();
        res.status(200).json({
            message: "FAQ DATA LISTED",
            status: 200,
            total_records: count,
            data: faqData,
        });
    } catch (error) {
        console.log("list:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.one = async (req, res) => {
    try {
        const faq_id = req.params.faq_id;
        const faq_idData = await Faq.findById({ _id: faq_id });
        if (faq_idData == null) {
            res.status(404).json({
                message: "FAQ ID CANNOT MATCH",
                status: 404
            });
        } else {
            res.status(200).json({
                message: "FAQ DATA GET SUCCESSFULLY",
                status: 200,
                answer: faq_idData.answer
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