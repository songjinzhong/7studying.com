#!/usr/bin/env node
/**
Run this script with Node.js 0.4.x and browse to http://localhost:3000/ to
see the test page for LazyLoad.
**/
var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, '7fen')));
app.listen(7777);
console.log("server start at : 7777");