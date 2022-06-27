var express = require('express');
var router = express.Router();
const { MongoClient} = require('mongodb');


let collection_count = 0;
// Doing mongo thing here

let data = [];


function printData() {

  // console.log("owoww");
  const uri = "mongodb+srv://subash:subash123@cluster0.jdzzw.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useUnifiedTopology: true });


  client.connect().then(client => {
    console.log("wow");
    collection_count = client.db('Subash').listCollections().toArray((err, collections) => {
      console.log(collections);
      data.push(collections.name);
    });
    console.log("I am here");
  })
  .then(data1 => {
    console.log('data: ' ,data);
    console.log('data1:', data1);
  })
  .finally (client.close());
}


/* GEThome page. */
router.get('/', function(req, res, next) {
  console.log("Console message");
  printData();
  res.render('index', { title: collection_count });
});

module.exports = router;
