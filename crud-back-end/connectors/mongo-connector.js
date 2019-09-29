const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var config = require('../configs/mongodb-config');

var dbOptions = {
    port:       config.database.port, 
    host:      config.database.host,
    user:       config.database.user,
    password: config.database.password,
    database: config.database.dbName
}

exports.connectToDB = () => {	
  var uri = 'mongodb://'.concat(dbOptions.user).concat(':')
                        .concat(dbOptions.password).concat('@')
                        .concat(dbOptions.host).concat(':')
                        .concat(dbOptions.port).concat('/')
                        .concat(dbOptions.database);
  var options = { useNewUrlParser: true }

  mongoose.connect(uri,options).then(
    () => { console.log('DB connection succeded '); },
    err => {  console.log('DB connection failed \n Error'+JSON.stringify(err,undefined,2));}
  );
  return mongoose;
}