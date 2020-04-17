const router = require('express').Router()
const express = require('express');

router.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
router.use(express.json());

const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://scode:admin@cluster0-6bmqd.mongodb.net/test?retryWrites=true&w=majority'

//konekcija na bazu
const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

client.connect(err => {
  if (err) {
    console.error(err)
  } else {
    console.log('Connected to mongodb')
    const db = client.db('test')

    // Get main posts from MongoDB
    router.get('/api/posts', (req, res) => {
      // Query data from MongoDB
      db.collection('postsAmar').find({parent: null}).toArray((err, posts) => {
        if (err) {
          console.error(err)
        }
        // Return data as JSON
        res.json(posts)
      })
    })

    // Get posts from MongoDB
    router.get('/api/posts/:id', (req, res) => {

      db.collection('postsAmar').find({parent:req.params.id}).toArray((err, posts) => {
        if (err) {
          console.error(err)
        }

        res.json(posts)
      })
    })

    // Insert questions
    router.post('/api/questions', (req, res) => {

      let today = new Date().toString();

      db.collection('postsAmar').insertOne({title:req.body.title,text:req.body.text,author:req.body.author,insert_date: today,parent:null})

      res.redirect('/');
    
    })
    
    // Insert answers
    router.post('/api/answer', (req, res) => {
      let today = new Date().toString();

      db.collection('postsAmar').insertOne({
        title:req.body.title,
        text:req.body.text,
        author:req.body.author,
        insert_date: today,
        parent:req.body.parentId
      })

      res.redirect('/');
    })

    router.get('/api/answers', (req, res) => {
      db.collection('postsAmar').find().toArray((err, data) => {
        if (err) {
          console.error(err)
        }

        var answers = data.filter(x => x.parent != null);
        // Return data as JSON
        res.json(answers)
      })
    });

    router.get('/api/answers/:id', (req, res) => {
      db.collection('postsAmar').find().toArray((err, data) => {
        if (err) {
          console.error(err)
        }

        var answers = data.filter(x => x.parent == req.params.id);

        //console.log(answers);
        // Return data as JSON
        res.json(answers)
      })
    });
  }
})

module.exports = router