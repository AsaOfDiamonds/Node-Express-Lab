
// import your node modules
// import db from './data/db.js'; // ES2015 Modules
const express = require('express');
const db = require('./data/db.js'); // CommonJS Modules

var cors = require('cors')

// add your server code starting here
const server = express();


server.use(cors());


// wire up global middleware
server.use(express.json());// teaches express how to parse json from the body

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
        .catch(err => res.status(500).json({ message: 'The post information could not be retrieved.', error: err}));
});

server.post('/api/posts/create', (req, res) => {
    const postInfo = req.body; // reads information from the body of the request

    db.insert(postInfo) // returns a promise, so we need to use .then
        .then(posts => {
            if(postInfo.title !== '' && postInfo.contents !== '') {
                res.status(201).json(posts)
            } else {
                res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
            }
        })
        .catch(err =>
            res.status(500)
            .json({ message: "There was an error while saving the post to the database", error: err })
            );
        });

server.delete('/api/delete/:id', (req, res) => {
    const id = params.id;

    db.findById(id)
    .then(posts => {
        if (posts) {
            db.remove(id).then(count => {
                res.status(200).json(posts);
            })
        } else {
            res.status(404)
                .json({ message: "The post with the specified ID does not exist." });
        }
    })
    .catch(err =>
        res.status(500).json({ message: "The post could not be removed" , error: err}) )
}); 

server.put('/api/edit/:id', async (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    try {
        const result = await db.update(id, changes);

        console.log('result', result);

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: "The post information could not be modified." });
    }
});

server.listen(8000, () => console.log('server running'));
