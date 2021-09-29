const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

const queriesArr = require('./data'); // Access to data
const Query = require('./models/query'); // Access to Query class

app.get('/', getAll);
app.get('/search/:search', searchWord);
app.get('/random/:rand', randomResult);

function getAll(req, res){
    const queryData = Query.all;
    res.json({ data: queryData });
};

function searchWord(req, res){
    let requestedWord = req.params.search.toLowerCase();
    let possibleResults = queriesArr.filter((query) => query.title.toLowerCase().includes(requestedWord) || query.description.toLowerCase().includes(requestedWord));
    res.send(possibleResults);
};

function randomResult(req, res){
    let randomSearch = req.params.rand.toLowerCase();
    let randomResults = queriesArr.filter((query) => query.title.toLowerCase().includes(randomSearch) || query.description.toLowerCase().includes(randomSearch));
    let randomResult = randomResults[Math.floor(Math.random() * randomResults.length)];
    res.send(randomResult );
};

module.exports = app;