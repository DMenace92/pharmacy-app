const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy',{useNewUrlParser: true })

const medInfoSchema = mongoose.Schema({
 
    userId: String,
    medication:String,
    quantity: String,
    doctor: String,
    dateWritten: String,
    daySupply: String,
    refills: String,



  
  
})

module.exports = mongoose.model('MedInfo',medInfoSchema)