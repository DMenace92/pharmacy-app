const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pharmacy',{useNewUrlParser: true })

const userSchema = mongoose.Schema({
    userId:String,
    
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
    // img:{
    //     type: Image,

    // },
    create_date:{
        type: Date,
        default: Date.now
    }


})
module.exports = mongoose.model('Users',userSchema)
