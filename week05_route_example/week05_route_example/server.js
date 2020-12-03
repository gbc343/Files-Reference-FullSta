const express = require('express');
const fs = require("fs");
var dateFormat = require('dateformat');
var computers = require("./Computers.js")
var healths = require("./healths.js")

const app = express();
const router = express.Router();

//create function to write data to server.txt file
let writeData = (data) => {
    data += "\n"
    fs.appendFile('server_log.txt', data, function (err) {
      if (err) throw err;
      console.log('Log Saved!');
    });
  }

//Create middleware function
let logger = (req, res, next) => {
    const todays = dateFormat(Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
    let method = req.method
    let data  = `[${todays}] -[${method}] - ${req.originalUrl}`
    //Call write function
    writeData(data)
    next()
  }
  

  //set the middleware
  //app.use("/user", logger);
  app.use(logger);

/*
  app.get('/book', function (req, res) {
    res.send('GET - Get a random book')
  })

  app.post('/book',function (req, res) {
    res.send('POST - Add a book')
  })

   app.put('/book',function (req, res) {
    res.send('PUT - Update the book')
  })
  */

  /*
  app.route('/book')
  .get( (req, res) => {
    res.send('GET -Get a random book')
  })
  .post((req, res) =>{
    res.send('POST - Add a book')
  })
  .put((req, res) =>{
    res.send('PUT - Update the book')
  })
*/
 app.use("/book/computer",computers)
app.use("/book/health",healths)


/*
app.get("/book/health/brain"),(req,res) =>{
  res.send('/book/health/brain')
}
*/
 app.listen(process.env.port || 8081);

 console.log('Web Server is listening at port '+ (process.env.port || 8081));