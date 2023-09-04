const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    category : String,
    availability : String
})

const Itemdb = mongoose.model('itemdb', schema);

module.exports = Itemdb;