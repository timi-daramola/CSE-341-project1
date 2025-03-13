const express = require('express');
const mongodb = require('./data/database');
const app = express();
const port = process.env.PORT || 3000;

app.use('/contacts', require('./routes/contacts'));

// Initialize the database
mongodb.initDb((err) => {
    if (err) {
        console.error('Failed to initialize database', err);
        process.exit(1);
    } else {
        console.log('Database initialized successfully');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    }
});


