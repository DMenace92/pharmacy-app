const users = require('../controllers/users')
const notes = require('../controllers/note')
const medInfo = require('../controllers/medInfo')
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "donuts";

module.exports = function(app){
    //USERS_____________________________________________________
    app.get('/users', users.index);
    app.post('/login', users.login);
    app.post('/register', users.register);


    //AUTH______________________________________________________
    app.use(jwtAuth)


    //USERS after auth

    //notes CURD________________________________________________
    // Create a new Note
    app.post('/notes', notes.create);
    // Retrieve all Notes
    app.get('/notes', notes.findAll);
    
    // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);
    // Delete a Note with noteId
    app.delete('/notes/:id', notes.deleteOne);

    //medinfo CURD_____________________________________________
    // Create medInfo
    app.post('/medInfo',medInfo.create);
    //retrive all meds
    app.get('/medInfo',medInfo.findAll)
    //update
    
    //delete
    app.delete('/medInfo/:id',medInfo.deleteOne)
    // app.put(medInfo)


}

const jwtAuth = (req, res, next) => {
    const token = req.body.token || req.headers.token || req.query.token;
    console.log(token);
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.log(err)
          return res.sendStatus(401)
        } else {
          delete decoded.password;
          req.decoded = decoded;
          next();
        }
      })
    } else {
      return res.sendStatus(401)
     
    }
  
  }