const express=require('express')
const app=express()

app.get('/',function(req,res){
    res.send('Hello world')
});

app.get('/banana',function(req,res){
    res.send('banana')
});

app.get('/home',function(req,res){
    // res.send(__dirname);
    res.sendFile(__dirname+'/home.html');
});

app.listen(3000);