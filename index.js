const express = require('express');
const bodyParser = require('body-parser');
// lecture # 9
const mongoose = require('mongoose');
// import the external files to use in index js
// const routes = require('./routes/api')

// set up express app
const app = express();
// connect to MongoDB lacture 9
mongoose.connect('mongodb://localhost/ninjago')
// mongoose promise is deprecated thats why we use this
mongoose.Promise = global.Promise
// connect to front end
app.use(express.static('public'))
// this is use always above the middleware 1
app.use(bodyParser.json())

// use the routes we use function use()
// to use  /api/routes we change '/api',routes either maniuly edit in api.js // initailaze routes
app.use('/api',require('./routes/api')); // this is 1

// middle ware for error handling
app.use(function(err,req,res,next){
  // console.log(err)
  res.status(422).send({error:err.message});

})

// request for data at 4000 // logged a msg //  handle request like this
// app.get('/api',function(req,res){
//   console.log('GET request')
//   // end the loading local host
//   // res.end();
//
//   res.send({name:'Ammar'})
// })

// listens for request
// first argument first part is for heroku variable
app.listen(process.env.port || 4000,function(){
console.log('now listeneing for requests')
})
