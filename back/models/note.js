const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy',{useNewUrlParser: true })

const notesSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note',notesSchema)
