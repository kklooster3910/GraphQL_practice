const express = require('express');
const app = express(); // creating a new express server

app.get('/', (req, res) => res.send("Hello you fucking world"));
app.listen(5000, () => console.log('server is running on port 5000 fam'))

