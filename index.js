const express = require('express');
const queryDB = require('./db');

const app = express();
app.listen(process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/show', (req, res) => {
    res.render('show');
});

app.get('/getData', (req, res) => {
    queryDB('SELECT * FROM "HotGirl"', [], (err, result) => {
        res.send(result.rows);
    });
});
