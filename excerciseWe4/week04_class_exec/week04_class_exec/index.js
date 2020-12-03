var express = require('express');
var app = express();
const router = express.Router();
var fs = require("fs");
//var user = require("user.json")
const{userinfo} = require('os');

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.send(__dirname+'/'+'./home.html');
  //res.sendFile("home.html");

});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  fs.readFile(__dirname + "/" + "user.json","utf8",(err,data) =>{
    res.send(JSON.parse(data));
  });
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send resonse as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send resonse as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login/:username&:password', (req,res) => {
  const userName = request.params.username 
  const passWord = request.params.password 
  if(userName == "bret" && passWord == "bret@123"){
    res.send('Status: true,\n')
    res.send('User is valid');

  }
  res.send('This is login router');
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  res.send('This is logout router');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));