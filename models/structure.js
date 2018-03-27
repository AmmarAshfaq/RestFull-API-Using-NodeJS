const mongoose  = require('mongoose');
const Schema = mongoose.Schema;



  // create geolocation Schema
  const GeoSchema = new Schema({
    type:{
      type:String,
      default:"Point"
    },
    coordinates:{
      type:[Number],
      index:"2dsphere"
    }
  })

// time 4:31 lec 8
// crete ninja schema  & model
const NinjaSchema = new Schema({
  name:{
    type:String,
    required:[true,'Name field is required']
  },
  rank:{
    type:String
  },
  available:{
type:Boolean,
default:false
},
geometry:GeoSchema

})


// creating ninja model
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;
