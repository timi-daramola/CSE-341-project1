const express = require('express')

const mongodb = require('./data/database');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require("./routes"));


// mongodb.initDb((err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         app.listen(port, () => {
//             console.log(`Database is listening on port ${port}`);
//           });
//     }
// });


const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://timilehin:timi12345@cluster0.zpbf3.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);