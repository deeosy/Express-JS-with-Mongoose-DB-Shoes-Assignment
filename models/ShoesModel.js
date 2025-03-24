// model,  we 1st import mongoose
const { default: mongoose } = require("mongoose");

// create schema
const ShoesSchema = mongoose.Schema({
    menShoes: {type: String, required: true},
    womenShoes: {type: String, required: true},
    kidsShoes: {type: String, required: true},
})

// create model
const ShoesModel = mongoose.model('Shoes', ShoesSchema)

module.exports = ShoesModel

