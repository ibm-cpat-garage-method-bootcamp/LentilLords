const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const apiHost = process.env.API_HOST || 'localhost:3001';

let storage = [];

module.exports = function(app) {
  app.use(cors());
  app.use('/api', proxy(apiHost));

  app.post('/storing', (req, res) => {
    let item = req.body.newItem;
    let quantity = req.body.quantity;
    let aisle = req.body.aisle;

    if (item !== '') {
      storage.push({
        name: item.name,
        quantity: item.quantity,
        aisle: item.aisle
      });
    }

    res.end();
  });

  app.post('/delete', (req, res) => {
    let items = req.body.data.split(',');
    console.log(storage);
    storage = storage.filter(item => {
      return !items.includes(item.name);
    });
    console.log(storage);
    res.send('Deleted!');
  });

  app.get('/groceryList', (req, res) => {
    res.send(storage);
  });
};
