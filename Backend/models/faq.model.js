const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    question: {
        type:String
    },
    answer: {
        type:String
    },
    type: {
        type:Number
    },
},{
    timestamps: false
});

module.exports = mongoose.model("faq", faqSchema);
