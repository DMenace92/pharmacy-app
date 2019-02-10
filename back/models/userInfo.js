const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy',{useNewUrlParser: true })

const userInfoSchema = mongoose.Schema({
  
})

module.exports = mongoose.model('UserInfo',userInfoSchema)