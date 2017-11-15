
let mongoClient = require('mongodb').MongoClient
    // , assert = require('assert');


 let connectionUrl = 'mongodb://127.0.0.1:27017/shakti';


mongoClient.connect(connectionUrl, function (err, db) {
    console.log('err, success',err, db);
});

