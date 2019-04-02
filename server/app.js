const express = require("express");
const graphqlHTTP = require("express-graphql")
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const cors = require("cors");

//allow cross-origin requests
app.use(cors());

mongoose.connect("mongodb://graphqlUser:graphqlUser123@ds061374.mlab.com:61374/gql-ninja123")

mongoose.connection.once('open', () => {
    console.log('database connected')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("server running at the port 4000")
})