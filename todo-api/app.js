const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const port = 3500;
const todo = require('./api/todo')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/todo',todo)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});