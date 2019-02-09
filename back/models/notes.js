const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy')

const notesSchema = mongoose.Schema({
   
    notes:{
        type: String,
        content: String,
    },
    create_date:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Notes',notesSchema)
