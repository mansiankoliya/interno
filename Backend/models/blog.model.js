const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    uniqueId: {
        type: String
    },
    title: {
        type: String
    },
    image: {
        type: Array
    },
    description: {
        type: String
    },
    category: {
        type: Number //1-traditional, 2-modern, 3-transitional, 4-eclectic, 5-mid-century modern
    },
    date: {
        type: String
    },
    tags: {
        type: String
    },
    status: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("blog", blogSchema)
