const users = require('../controllers/users')
const notes = require('../controllers/note')
const userinfo = require('../controllers/userinfo')
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "pharmacy";

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
    app.get('/notes/:noteId', notes.findOne);
    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);
    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);

    //userinfo CURD_____________________________________________


}

const jwtAuth = (req, res, next) => {
    const token = req.body.token || req.headers.token || req.query.token;
    
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: 'You are not authorized, Please log in to continue.'
          });
        } else {
          delete decoded.password;
          req.decoded = decoded;
          next();
        }
      })
    } else {
      return res.status(401).send({
        message: 'You are not authorized, Please log in to continue.'
      });
    }
  
  }