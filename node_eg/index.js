var http = require("http");
var url = require("url")
var querystring = require("querystring")

var arithmetic = require("./Addition");
var person = require("./Person");
console.log("Hello NodeJs");

console.log(arithmetic.sum(10,20));
console.log(arithmetic.sub(10,20));
console.log(arithmetic.mul(10,20));
console.log(arithmetic.div(10,20));

let a = new arithmetic.AdditionClass(100,20);
console.log(a.add());

let p = new person.Person("Pritesh Patel");
p.display();
/*
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');
*/

let users = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com"},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com"},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com"},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com"}
]

const port = process.env.PORT || 8082

const server = http.createServer((req, res) => {

    //console.log(req.url)
    let param = url.parse(req.url).query
    //console.log(param)
    //console.log(querystring.parse(param))
    let qObj = querystring.parse(param);
    //console.log(qObj.uid)
    //console.log(qObj.unm)
    //let {uid, username} = qObj
    //console.log(username)
    
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        //http://localhost:8082/
        if (req.url === '/') {
            res.end("<h1>Hello World</h1>")
        }
        //http://localhost:8082/hello
        if (req.url === '/hello') {
            res.write("<h1>Hello</h1>")
            res.end()
        }

         //http://localhost:8082/users
        if (req.url === '/users') {
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            return res.end(JSON.stringify(users))
        }

         //http://localhost:8082/users?uid=1
         if (req.url.match(/\/users\?uid=\d/i)) {
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            let param = url.parse(req.url).query
            let qObj = querystring.parse(param);
            let userId = qObj.uid
            //Fetch user using userId and return as JSON
            return res.end(JSON.stringify(users[0]))
        }
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})