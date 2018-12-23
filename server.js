var express=require('express');
var app=express();
// var bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.get('/sendMailToRecipient',function(req,res){
    res.send("done");
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});