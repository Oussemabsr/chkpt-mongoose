// 1 require mongoose
const mongoose = require("mongoose");

// 2 create Schema
const Schema = mongoose.Schema

const contactSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    phone : { type : Number },
});

module.exports = contact = mongoose.model("contact", contactSchema);