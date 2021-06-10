const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const championSchema = new Schema({
    name: String,
    primaryRole: String,
    secondaryRole: String, 
    releaseYear: Number,
}, {timestamps: true})

module.exports = mongoose.model('Champion', championSchema)