const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const db = require('./config/key').mongoURI;
const path = require('path');

var app = express();
app.use(express.json());

mongoose
.connect(db, { useNewUrlParser: true , useUnifiedTopology: true })
.then(() => console.log('Successfully connected to MongoDb!'))
.catch(err => console.log(err))

app.use('/api/items', items);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
app.set('port', process.env.PORT || port);
app.listen(port, () => console.log(`Server started on port : ${port}`));