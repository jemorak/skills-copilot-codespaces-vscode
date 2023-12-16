//Create Web Server
const express = require('express');
const app = express();
//Create Database
const db = require('./config/database');
//Test DB
db.authenticate()
    .then(() => console.log('Database Connected...'))
    .catch(err => console.log('Error: ' + err))

//Create Routes
app.get('/', (req, res) => res.send('INDEX'));
//Comments Routes
app.use('/comments', require('./routes/comments'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

