const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy', {userNewUrlParser:true})

const librarySchema = mongoose.Schema({
userId:{
  type: String,
  require: true,
},
medication:String,
quantity: String,
doctor:String,
expired: String,
daySupply: String,
refills:String,
directions: String

})
module.export = mongoose.model('Library', librarySchema)