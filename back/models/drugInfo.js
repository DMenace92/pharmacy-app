const mongoose = require('mongoose')
mongoose.commect('mongodb://localhost/pharmacy',
{userNewUrlParser:true})

const drugInfoSchema = mongoose.Schema({
  drug:{
    medication:{
      Adderall:{
        id: String,
        interaction:'',
        dose:'',
        drugClass:'Amphetamines',
        controlledClass:'CII',
        Indication:'',
        maxDose:'',
        form:'',
      },
      Abelcet:{
        id: String,
        interaction:'',
        dose:'',
        drugClass:'Polyene Antifungals',
        controlledClass:'OTC',
        Indication:'',
        maxDose:'',
        form:'',
      },
      Ibuprofen:{
        otherNmae:'Advil',
        brand:'motrin',
        id: String,
        interaction:'',
        dose:'200mg',
        drugClass:'Anti-Inflamitory',
        controlledClass:'OTC',
        Indication:'',
        maxDose:'3200mg',
        form:'liquid Gels',
      },
      Ibuprofen:{
        otherNmae:'Advil',
        brand:'Motrin',
        id: String,
        interaction:'',
        dose:'200mg',
        drugClass:'Anti-Inflamitory',
        controlledClass:'OTC',
        Indication:'',
        maxDose:'3200mg',
        form:'Tablet',
      },
      Ibuprofen:{
        id: String,
        interaction:'',
        dose:'400mg',
        drugClass:'Anti-Inflamitory',
        controlledClass:'OTC',
        Indication:'',
        maxDose:'3200mg',
        form:'Tablet',
      },
      Ibuprofen:{
        id: String,
        interaction:'',
        dose:'600mg',
        drugClass:'Anti-Inflamitory',
        controlledClass:'OTC',
        Indication:'',
        maxDose:'3200mg',
        form:'Tablet',
      },
      Ibuprofen:{
        id: String,
        interaction:'',
        dose:'800mg',
        drugClass:'Anti-Inflamitory',
        controlledClass:'OTC',
        Indication:'',
        maxDose:'3200mg',
        form:'Tablet',
      },

    }
  }
})
module.export = mongoose.model('drugInfo', drugInfoSchema )