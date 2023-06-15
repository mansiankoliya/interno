const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
    uniqueId: {
        type:String
    },
    name: {
        type:String
    },
    lastName: {
        type:String
    },
    email: {
        type:String
    },
    mobile: {
        type:String
    },
    image: {
        type:String
    },
    proffesion: {
        type:String
    },
    bio: {
        type:String
    },
    country: {
        type:String
    },
    linkedIn: {
        type:String
    },
    twitter: {
        type:String
    },
    instragram: {
        type:String
    },
    status: {
        type:Number
    }
},{
    timestamps: true
});

module.exports = mongoose.model("professional", professionalSchema)
