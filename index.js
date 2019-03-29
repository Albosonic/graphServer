var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var request = require('request');
var documentHelpers = require('./hepers/documentHelpers');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    myNumber: Int    
    documentHistory: String
  }
`);
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => 'welcome to the jungle!',
  myNumber: () => 7,
};

var app = express();

app.use('/graphql', graphqlHTTP(
  (req, res, graphQlParams) => {
      documentHelpers.fetchDocumentHistory(req.headers.cookie, documentHistory => root['documentHistory'] = () => documentHistory);
      return ({ schema: schema, rootValue: root, graphiql: true })
    }
  )
);

app.get('/',(req, res) => {
  res.send('HELLO WORLD!!!!!!!!!!!!!!! this is a demo server');
});

app.listen(8080);
console.log('Running a GraphQL API server at port:8080');