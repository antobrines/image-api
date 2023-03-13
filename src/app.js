const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const { errorF } = require('./utils/message');


const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// handler bad formating
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return errorF('Bad formating', err, 400, res, next);
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', routes);

// handler not found
app.use((req, res, next) => {
  const error = new Error('Not found');
  errorF(error.message, error, 404, res, next);
});

module.exports = app;