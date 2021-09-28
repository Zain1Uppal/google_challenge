const queryData = require('../data')

class Query {
    constructor(data){
        this.id = data.id;
        this.cat = data.cat;
        this.title = data.title
        this.url = data.url
    }
    static get all(){
        const queries = queryData.map((q) => new Query(q));
        return queries;
    }
}

module.exports = Query