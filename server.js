'use strict';
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://localhost:5432';
const client = new pg.Client('conString');
client.connect();

//middleware stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/home', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.get('/projects', function(request, response){
  
})
