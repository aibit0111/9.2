var fs = require('fs');
var content = "Hey i am going to create a file and write this content"
var express = require('express');
var app = express();
app.listen(909,function(req,res){

});
fs.writeFile('sample.txt',content,'utf8',function(error){
    if (error) throw error;
});
console.log(content);
app.get('',function(req,res){
    res.send(content);

})

