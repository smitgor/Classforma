const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.get('/api',function(req,res){
    res.json({message: "it's wokring"});
    res.end();
});

app.listen(PORT,function(req,res){
    console.log(`server is running on ${PORT}`);
});