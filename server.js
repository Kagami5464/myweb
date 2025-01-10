var express = require("express");
var server = express();

server.use(express.static(__dirname + "/web"));

var DB = require("nedb-promises");
var profolioWorks = DB.create(__dirname+"/profolioWorks.db");

profolioWorks.insert([
    {imageUrl:'images/2.png',text:"Kuro"},
    {imageUrl:'images/3.png',text:"Shusta"},
    {imageUrl:'images/4.png',text:"Isagi"},
    {imageUrl:'images/5.png',text:"Ayru"},
    {imageUrl:'images/6.png',text:"Mysta"},
    {imageUrl:'images/7.jpeg',text:"とーる"},
    {imageUrl:'images/8.PNG',text:"Mysta"},
])

server.get("/porfolioWorks-data", (req,res)=>{
    //DB
    Works.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})

server.get("/porfolioWorks-data", (req,res)=>{
    //DB
    profolioWorks.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})



server.listen(80, () => {
    console.log("Server is running at port 80.");
});