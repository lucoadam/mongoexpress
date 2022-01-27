// Filename: server.js

/**
 * Importing packages
 */
 const express = require('express');
 const mongoose = require('mongoose');
 
 // Import routes from routes/index.js
 const router = require('./routes');
 
 // Initialize express
 const app = express();
 
 // Parses the json data from request body (request.body)
 app.use(express.json());
 
 // Parses the query params from request url (request.params)
 app.use(express.urlencoded({ extended: true }));
 
 // Uses imported routes in express
 app.use('/', router);
 /**
  * Establishing connection to the database
  * mongodb://localhost:27017/mydb
  * mongodb => Service name (database)
  * localhost => Domain/ IP
  * 27017 => Port ( MongoDB default port)
  * mydb => database Name
  */
//  mongoose.connect('mongodb://localhost:27017/mydb')
 mongoose.connect('mongodb+srv://demouser:hJokJET3BniNaDnU@cluster0.a4lfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
   .then(() => {
       console.log('Database connected');
   })
   .catch((err) => {
       console.log(err);
   });
 
 // Listen web requests on 3000 port
// console.log('env variable', process.env.PORT || 3000)
const port = process.env.PORT || 3000
 app.listen(port, () => {
   //string concat
    //  console.log('App listening on port http://localhost:'+port);
     console.log(`App listening on port on http://localhost:${port}`)
 });

//  function functionName () {
//     // scoped ( this=> denote particular function)
//  }

//  const functionName = () => {
//     // not scoped (this => outside the function)
//  }

//  /**
//   *  {} determines scope
//   */