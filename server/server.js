const express = require('express')
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors());
const port = process.env.PORT || 7000;
const queriesArr = require('./data') 

const Query = require('./models/query')

app.get('/', getAll)
app.get('/search/:search', searchWord)
app.get('/random/:rand', randomResult)

function getAll(req,res){
    const queryData = Query.all
    res.send(queryData)
}

function searchWord(req, res){
    let requestedWord = req.params.search.toLowerCase()
    let possibleResults = queriesArr.filter((query) => query.title.toLowerCase().includes(requestedWord))
    res.json({results:possibleResults})
}

function randomResult(req, res){
    let randomSearch = req.params.rand.toLowerCase()
    let randomResults = queriesArr.filter((query) => query.title.toLowerCase().includes(randomSearch))
    let result = randomResults[Math.floor(Math.random()*randomResults.length)]
    res.json({result:result})
}

app.listen(port, ()=>{
    console.log(`on port ${port}`)
})
