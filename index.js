// import your node modules
const express = require('express');
const db = require('./data/db.js');

// add your server code starting here
const server = express();

server.get('/', (req, res) => {
    db.find()
    .then(posts => {
        res.status(200).json(posts);        
    })
    .catch(err => {
        res.json(err);
    });
});

server.get('/api/posts', (req, res) => {
    db.find()
    .then(posts => {
        if (posts) {
            res.status(200).json(posts);
        } else {
            res.status(500).json({ error:'The posts information could not be retrieved.' });
        }        
    })
    .catch(err => res.status(500).json(err));
});

server.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(posts => {
        if (posts) {
            res.status(200).json(posts);
        } else {
            res.status(404).json({ message: 'The posts with the specified ID does not exist'});
        }
    })
        .catch(error => res.status(500).json({ error: 'The post information could not be retrieved.'}));
});

server.listen(8000, () => console.log('server running'));
