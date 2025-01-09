var express = require("express");
var server = express();

server.use(express.static(__dirname + "/web"));

server.listen(80, () => {
    console.log("Server is running at port 80.");
});

var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/protfolio.db");

ProfolioDB.insert([
    { href："#portfolioModal1",}
])

server.get("/services",(req,res)=>{
    //DB find
    var Services=[
        {icon:"fa-shopping-cart",heading:"E-Commerce",text:"L"}
        {icon:"fa-laptop",heading:"Design",text:"L"}
    ]
}