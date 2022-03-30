var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'Jay', address: 'Ahmedabad, Gujarat, INDIA.'},
    { name: 'Nidhi', address: 'Junagadh, Gujarat, INDIA.'},
    { name: 'Aahana', address: 'Gandhinagar, Gujarat, INDIA.'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});