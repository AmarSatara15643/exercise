const router = require('express').Router()

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

    // Get posts from MongoDB
    router.get('/api/posts', (req, res) => {
      // Query data from MongoDB
      db.collection('postsAmar').find({}).toArray((err, posts) => {
        if (err) {
          console.error(err)
        }
        // Return data as JSON
        res.json(posts)
      })
    })
    
    // Get posts from MongoDB where parent
    router.get('/api/posts:id', (req, res) => {
      // Query data from MongoDB
      console.log("Post id ", req.params.id);
      db.collection('postsAmar').find({},{ projection: { _id: req.params.id}}).toArray((err, posts) => {
        if (err) {
          console.error(err)
        }
        // Return data as JSON
        res.json(posts)
      })
    })

    // Set posts on MongoDB
    router.post('/api/posts', (req, res) => {

      res.send("Post received");

      // db.collection('postsAmar').insertOne({}).where((err, posts) => {
      //   if (err) {
      //     console.error(err)
      //   }
      // })
    })
  }
})

module.exports = router