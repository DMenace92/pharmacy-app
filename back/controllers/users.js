const User = require('../models/users');
module.exports = {

    index:(req,res)=>{
        User.find().exec((err, users)=>{
            res.json(users);
        })
    //    User.create({name:'test', username:'test', password:'test', email:'test'})
        // mongoose('users').then(users =>{
        //     res.json(users)
        
    },


//login
login:(req,res,next)=>{
    
    User.findOne({email: req.body.email, password: req.body.password})
    .exec(function(err,User){
        if (err) {
        res.json(err)
        } else if (!User) {
        var err = new Error('User not found.');
        err.status = 401;
        res.json(err)
        } else {
            res.json('success');
        }
        })
},


//registeration
register:(req,res,next)=>{
console.log(req.body)
    let userData = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    }
    User.create(userData, function(err,users){
        if (err){
        return next(err)
        }else{
            return res.redirect('/')
        }
    })


},


    
}