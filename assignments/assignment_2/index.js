const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req,res)=>{
    // path.join(__dirname, "index.html")
    fs.readFile(path.join(__dirname, "index.html"), {encoding:"utf-8"}, (err, data) =>{
        if(err){
            console.log(err);
        } else {
            res.write(data);
            res.end()
        }
        
    })
})
server.listen(3000);