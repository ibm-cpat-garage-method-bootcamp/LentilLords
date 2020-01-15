const express = require('express');
const proxy = require("express-http-proxy");
const cors = require('cors')

const apiHost = process.env.API_HOST || 'localhost:3001';

const storage = []



module.exports = function(app){
  app.use(cors());
  app.use('/api', proxy(apiHost));

  app.post('/storing', (req, res) => {
    let item = req.body.newItem
    storage.push(item)
    console.log(storage)
    res.end()
  })

  app.get('/groceryList', (req, res) => {
    res.send(storage)
  })
};
