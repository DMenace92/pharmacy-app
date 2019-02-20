const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy',{useNewUrlParser: true })

const notesSchema = mongoose.Schema({
    userId: {
        type: String,
        required:true,
    },
    // medId:{
    //     type: String,
    //     required:true,
    // },
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note',notesSchema)
