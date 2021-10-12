const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api',function(req,res){
    res.json({message: "it's wokring"});
    res.end();
});

app.listen(PORT,function(req,res){
    console.log(`server is running on ${PORT}`);
});