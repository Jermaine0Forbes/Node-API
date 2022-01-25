
require('dotenv').config(); 
var express = require('express');
var body = require('body-parser');
var cookie = require('cookie-parser');
var path = require('path');
var app = express();
var routes = require('./mvc/routes/routes');
var ip = process.env.IP;
var port = process.env.PORT || 3001;
var cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(body.json());
app.use(body.urlencoded({extended:true}));
app.use(cookie());

app.use('/', routes);
app.use(function(req,res,next){
	if(res.status(404)){
	  res.sendStatus(404);
	}

    next();
});

app.use(function(err,req,res,next){
    if(res.status(500)){
          res.sendStatus(500);

    }else if(res.status(502)){
        res.sendStatus(502);

    }else if(res.status(503)){
        res.sendStatus(503);
    }
})


app.listen(port, ip, function(){
    var n = process.env.NODE;
    const code = require('crypto').randomBytes(64).toString('hex');
    console.log("node connected to "+port);
    console.log("node environment is in "+n)
    // console.log(code);
})
