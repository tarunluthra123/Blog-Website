const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
});

module.exports = mongoose.model("Blog", blogSchema);
