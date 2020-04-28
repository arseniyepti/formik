const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

const mySql = [];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sign-up', ({ body }, res) => {
  const result = mySql.find((el) => el.email === body.email);
  if (result) {
    res.send('not successful');
  } else {
    mySql.push(body);
    res.send('successfully');
  }
});

app.listen(3001, () => {});
