require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan(process.env.MORGAN_LOG_TYPE || 'combined'));
app.use(express.json()); // this replaces body-parser
app.use(express.static('server/static'));

if (!module.parent) {
    app.listen(process.env.SERVER_PORT);
}
module.exports = app;

// eslint-disable-next-line no-console
console.log('Listening on port ' + process.env.SERVER_PORT);
