var express = require("express");
var server = express();

server.use(express.static(__dirname + "/web"));

server.listen(80, () => {
    console.log("Server is running at port 80.");
});


var DB = require("nedb-promises");

var profolioGif = DB.create(__dirname+"/protfolioGif.db");
var profolioWorks = DB.create(__dirname+"/protfolioWorks.db");

profolioWorks.insert([

])

profolioGif.insert([

])


server.get("/profolioWorks-data", (req,res)=>{
    //DB
    profolioWorks.find({}).then(results=>{
        if(results !=null){
            res.send(results);        
        }else{
            res.send("Error!");
        }
    })
})

server.get("/profolioGif-data", (req,res)=>{
    //DB
    profolioGif.find({}).then(results=>{
        if(results !=null){
            res.send(results);        
        }else{
            res.send("Error!");
        }
    })
})