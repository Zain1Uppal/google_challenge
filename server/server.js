const express = require('express')
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors());
const port = process.env.PORT || 7000;
const queriesArr = require('./data') 

const Query = require('./models/query')

app.get('/', getAll)
app.get('/:search', searchWord)

function getAll(req,res){
    const queryData = Query.all
    res.send(queryData)
}

function searchWord(req, res){
    let requestedWord = req.params.search.toLowerCase()
    console.log(requestedWord)
    let possibleResults = queriesArr.filter((query) => query.title.toLowerCase().includes(requestedWord))
    console.log(possibleResults)
    res.json({results:possibleResults})
}

function randomResult(req, res){
    let requestedWord = req.params.search.toLowerCase()
    
}

app.listen(port, ()=>{
    console.log(`on port ${port}`)
})
