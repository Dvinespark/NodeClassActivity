var express = require('express');
var router = express.Router();



// Doing mongo thing here

// let data = {};
// // console.log("owoww");
let collection_count = 0;
const { MongoClient} = require('mongodb');
const uri = "mongodb+srv://subash:subash123@cluster0.jdzzw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });


client.connect().then(client => {
  console.log("wow");
  collection_count = client.db("subash").listCollections().toArray();
  console.log(collection_count);
  console.log("I am here");
})
.then(cols => {console.log("collections" + cols)})
.finally (client.close());


/* GEThome page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: collection_count });
});

module.exports = router;
