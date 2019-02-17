const User = require('../models/users');
// const hasher = require("../config/hasher.js");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "donuts";
module.exports = {

    index:(req,res)=>{
        User.find().exec((err, users)=>{
            res.json(users);
        })
    },
//login
    login:(req, res)=>{
        User.findOne({email: req.body.email, password: req.body.password})
        .exec(function(err,user){
            console.log(user);
            if (err) {
            res.json(err)
            } else if (!user) {
            var err = new Error('User not found.');
            err.status = 401;
            res.json(err)

            } else if(user){//match
                delete user.password;
                const token = jwt.sign({user}, secret,
                    // {expiresIn: "10m"}
                    )
                res.json({message: "Successfully signed in", token, user})
            }else {
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