var express = require('express')
var app = express()
const router = express.Router();
var fs = require("fs");
const { request } = require('http');
const{userInfo} = require("os")
var url = require("url")
var info = require('./users.json')

app.use(express.static('public'))

router.get('/users/all', (req,res) => {
   fs.readFile(__dirname + "/" + "users.json","utf8",(err,data) =>{


info.sort((a, b) => {
   if (a === b) {
     return 0;
   }
   return a.username < b.username ? -1 : 1;
 });


     res.send(info);
   });

});

 router.get('/user', (req,res) => {//check if this works online, its what want
      let user = req.query.uid

       if(user != null){
          
       let selection = ()=>{for(let i=0;i<info.length;i++){//test if this works
         if(info[i].id == user){
            let v = {
               "id": info[i].id,
               "name":info[i].name,
               "email":info[i].email,
               "address": {
                  'street name': info[i].address.street,
                  'city': info[i].address.city,
                  'zipcode': info[i].address.zipcode,
                  },
               "phone":info[i].phone
               
            } 
            return v;
         }
         else{
            v={"message": "No user found" }  
         }    
      }
      return  v
      }
       
                 
      console.log("it worked, nothing broke")

      
   //console.log(s(info))
      res.send(selection());     
      res.send('This is login router');
     // res.send(JSON.parse(data));
   }
   });


 /*

 router.get('/login/:username&:password', (req,res) => {
  const userName = request.params.username 
  const passWord = request.params.password 
  if(userName == "bret" && passWord == "bret@123"){
    res.send('Status: true,\n')
    res.send('User is valid');

  }
  res.send('This is login router');
});


 */
 


router.get('/logout', (req,res) => {
   res.send('This is logout router');
 });
 
 app.use('/', router);
 
 app.listen(process.env.port || 8081);
 
 console.log('Web Server is listening at port '+ (process.env.port || 8081));



/*
var server = app.listen(8081, () => {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
*/
