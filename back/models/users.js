const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy')

const userSchema = mongoose.Schema({
    
    name:{
        type: String,
        required:true
    },
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        trim: true,
        require:true,
        unique:true
    },
    create_date:{
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('Users',userSchema)
