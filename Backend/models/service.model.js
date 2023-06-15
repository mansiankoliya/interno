const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceId: {
        type:String
    },
    name: {
        type:String
    },
    title: {
        type:String
    },
    description: {
        type:String
    },
    video: {
        type:Array
    },
    status: {
        type:Number
    }
},{
    timestamps: true
});

module.exports = mongoose.model("service", serviceSchema)
