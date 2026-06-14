const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect("mongodb://localhost:27017/DBpractice")
    .then(() => {
        console.log("Connected to MongoDB");
    })
}

module.exports = connectToDB;