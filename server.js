var express = require("express");
var server = express();

server.use(express.static(__dirname + "/web"));

server.listen(80, () => {
    console.log("Server is running at port 80.");
});


var DB = require("nedb-promises");

var profolioWorks = DB.create(__dirname+"/protfolioWorks.db");

profolioWorks.insert([
    { imgUrl: "images/2.png", text: "Kuro" },
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
