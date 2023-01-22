import express from 'express';
const bodyParser = require('body-parser');
const forgotRouter = require('./routes/forgot');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', forgotRouter);

app.listen(3000, () => {
  console.log('Application listening at http://localhost:3000');
});
