import validationSchema from '../components/helpers/Yup';

const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

const mySql = [];
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sign-up', async ({ body }, res) => {
  const validate = await validationSchema.isValid(body);
  const result = mySql.find((el) => el.email === body.email);
  if (result || !validate) {
    res.send('not successful');
  } else {
    mySql.push(body);
    setTimeout(() => {
      res.send('successfully');
    }, 3000);
  }
});

app.listen(3001, () => {});
