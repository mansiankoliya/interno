const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectId: {
        type:String
    },
    name: {
        type:String
    },
    description: {
        type:String
    },
    image: {
        type:Array
    },
    client: {
        type:String
    },
    type: {
        type:Number //1-residential, 2-commercial
    },
    category: {
        type:Number // 1-traditional, 2-modern, 3-transitional, 4-eclectic, 5-mid-century modern 6-plan project 
    },  
    tags: {
        type:String
    },
    date: {
        type:String
    },
},{
    timestamps: true
});

module.exports = mongoose.model("project", projectSchema)
