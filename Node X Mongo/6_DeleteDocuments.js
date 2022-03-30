var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name:"Nidhi" };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
      db.close();
  });
});