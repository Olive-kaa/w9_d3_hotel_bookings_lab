const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {  // for collection go to server.js

    const router = express.Router();
  
    router.get('/', (req, res) => {
      collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    });
  
    router.get('/:id', (req, res) => {
      const id = req.params.id;
      collection
        .findOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    });
  
    router.post('/', (req, res) => {
      const newBooking = req.body;  //assigning body which is content of a "document" in mongoDB
  
      collection
        .insertOne(newBooking)
        .then((doc) => res.json(doc.ops[0]))  //we use "ops" to only work on the newData inserted
  
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    });
  
  
    router.delete('/:id', (req, res) => {
      const id = req.params.id;
      collection
        .deleteOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
        
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    });
    
    router.put('/:id', (req, res) => {
      const id = req.params.id;
      const updatedData = req.body
      console.log("object:", updatedData)
      collection
      .updateOne({_id: ObjectID(id)}, {$set: updatedData})
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
  })
});

    return router;
  };
  
module.exports = createRouter;