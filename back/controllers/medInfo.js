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
    _id:req.params.id
  }
  MedInfo.find(find,function(err,medInfo){
    if(err){
      return next(err)
    }else{
      return res.json(medInfo)
    }
  })
}
// update:(req,res,next)=>{

//   let update ={
//     medication: req.body.medication,
//     quantity: req.body.quantity,
//     doctor: req.body.doctor,
//     daySupply: req.body.daySupply,
//   }
//   MedInfo.updateOne(update,function(err,medInfo){
//     if(err){
//       return next(err)
//     }else{
//       return res.sendStatus(200)
//     }
//   })
// }
}