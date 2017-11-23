var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/slideshow")
            .then(conn => global.conn = conn)
            .catch(err => console.log(err))


//Return all urls
function findAll(callback){
  global.conn.collection("customers").find({}).toArray(callback);
}

//Insert url on database
function insert(customer, callback){
  global.conn.collection("customers").insert(customer, callback);
}

//Find a url by id
var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){
    global.conn.collection("customers").find(new ObjectId(id)).toArray(callback);
}

//Update a url
function update(id, customer, callback){
  global.conn.collection("customers").updateOne({_id:new ObjectId(id)}, customer, callback );
}

//Delete a url
function deleteOne(id, callback){
  global.conn.collection("customers").deleteOne({_id:new ObjectId(id)}, callback);
}


module.exports = { findAll, insert, findOne, update, deleteOne }
