
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({});

module.exports = mongoose.model("samples" , dataSchema);

