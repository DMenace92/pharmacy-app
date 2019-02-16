const MedInfo = require('../models/medInfo');
module.exports = {

  create: (req, res,next) => {
console.log(req.body)
  
let infoData = {
    medication: req.body.medication,
    quantity: req.body.quantity,
    doctor: req.body.doctor,
    dateWritten: req.body.dateWritten,
    expired: req.body.expired,
    daySupply: req.body.daySupply,
    refills: req.body.refills,
    directions: req.body.directions,
}
MedInfo.create(infoData, function(err,medInfo){
  if(err){
    return next(err)
  }else{
    return res.sendStatus(200)
  }
})
},
findAll: (req, res, next) => {

  let find ={
   
  }
  MedInfo.find(find,function(err,medInfo){
    if(err){
      return next(err)
    }else{
      return res.json(medInfo)
    }
  })
},
//delete
delete: (req,res)=>{
  MedInfo.findByIdAndRemove(req.params.id)
    .then(meds =>{
      if(!meds){
        return res.status(404).send({
          message: "Note not found with id " + req.params.id
      });
  }
  res.send({
      message: "meds deleted successfully!"
  });
}).catch(err => {
  if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
          message: "meds not found with id " + req.params.Id
      });
  }
  return res.status(500).send({
      message: "Could not delete meds with id " + req.params.Id
  });
});

      }
}