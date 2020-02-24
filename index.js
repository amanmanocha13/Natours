const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
app.use(express.static('./assets'))
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(port,function(err){
    if(err){
        console.log('Error in starting server');
        return;
    }
    console.log('Server is up and running on port :',8000);
});