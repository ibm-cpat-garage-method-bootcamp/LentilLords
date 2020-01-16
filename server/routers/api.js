const express = require('express');
const proxy = require("express-http-proxy");
const cors = require('cors')

const apiHost = process.env.API_HOST || 'localhost:3001';

let storage = []

module.exports = function(app){
  app.use(cors());
  app.use('/api', proxy(apiHost));

  app.post('/storing', (req, res) => {
    let item = req.body.newItem
    let quantity = req.body.quantity || 1
    
      storage.push({
        'name': item,
        'quantity': quantity
      })

    res.end()
  })

  app.post('/delete', (req, res) => {
    let items = req.body.data.split(",")

    storage = storage.filter(item => {
      return !items.includes(item.name)
    });
    res.send('Deleted!')
  })

  app.get('/groceryList', (req, res) => {
    res.send(storage)
  })
};
