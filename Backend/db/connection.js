const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/furniture")
    .then(() => {
        console.log("connection is successfull");
    })
    .catch((err) => {
        console.log(`Databse not connected ${err}`);
    })