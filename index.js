const express = require('express');
const app = express(); // creating a new express server
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql')


mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongoDB fam'))
  .catch(err => console.log(err));

// app.get('/', (req, res) => res.send("Hello to everybody out there, testing nodemon"));
app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true
  })
)
app.use(bodyParser.json());
app.listen(5000, () => console.log('server is running on port 5000 fam'))

