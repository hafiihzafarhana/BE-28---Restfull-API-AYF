const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./config/config');

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT;

db
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error.message} did not connect`));