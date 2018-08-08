const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('could not connect to database: ', err);
    }else {
        //console.log('secret' + config.secret);
        console.log('connected to database: ' + config.db);
    }
});
//Access client distribution
app.use(express.static(__dirname + '/client/dist/client'));

// redirect to same url
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
  });
  
  app.listen(3000, () => {
      console.log('listening on port 3000');
  });