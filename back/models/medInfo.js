const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy',{useNewUrlParser: true })

const medInfoSchema = mongoose.Schema({
 
    userId: {
        type: String,
        required:true,
    },
    medication:String,
    quantity: String,
    doctor: String,
    dateWritten: String,
    expired: String,
    daySupply: String,
    refills: String,
    directions: String,



  
  
})

module.exports = mongoose.model('MedInfo',medInfoSchema)