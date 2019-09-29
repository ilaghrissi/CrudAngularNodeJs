var express = require('express')
var app = express()
 
var mysql = require('mysql')

var config = require('./config')
var dbOptions = {
    host:      config.database.host,
    user:       config.database.user,
    password: config.database.password,
    port:       config.database.port, 
    database: config.database.dbName
}

app.use(myConnection(mysql, dbOptions, 'pool'))