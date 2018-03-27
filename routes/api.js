const express = require('express');
const router = express.Router(); //router object // update event handler on in it
const Ninja = require('../models/structure');

// get a list of ninja from the database
router.get('/ninjas',function(req,res,next){
  // find method to get all data {} show to get all data // we use specifically data thats why we nit use this
// Ninja.find({}).then(function(ninjas){
//   res.send(ninjas)
// })
Ninja.geoNear(
  {type : "Point",coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
  {maxDistance:100000,spherical:true}
).then(function(ninjas){
res.send(ninjas)
})
})

// add anew ninja to the database
router.post('/ninjas',function(req,res,next){
Ninja.create(req.body).then(function(ninja){
res.send(ninja)

}).catch(next)
  // var ninja = new Ninja(req.body);
  // //mongoose method to save the MongoDB
  // ninja.save()

})
// update a ninja in a database// :id is paramter or variable
router.put('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Ninja.findOne({_id:req.params.id}).then(function(ninja){
      res.send(ninja)
    })

  })

})

// delete a ninja from the database
router.delete('/ninjas/:id',function(req,res,next){
  // to access in http:// .... ninja.35345435
  // delete the field
  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
res.send(ninja)
  })


//   console.log(req.params.id)
// res.send({type:'DELETE'})
})

// export routes to access in get,post /... methods
module.exports =  router;
