const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy',{useNewUrlParser: true })

const userInfoSchema = mongoose.Schema({
  pharmacy:{
    type:String,
    required:true,
    phoneNumber: String,
    faxNumber: String,
  },
  
})

module.exports = mongoose.model('UserInfo',userInfoSchema)