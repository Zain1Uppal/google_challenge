const queryData = require('../data');

class Query {
    constructor(data){
        this.id = data.id;
        this.category = data.category;
        this.title = data.title;
        this.url = data.url;
        this.description = data.description;
    }

    static get all(){
        const queries = queryData.map((q) => new Query(q));
        return queries;
    }
}

module.exports = Query;