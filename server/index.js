require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan(process.env.MORGAN_LOG_TYPE || 'combined'));
app.use(bodyParser.json());
app.use(express.static('server/static'));

if (!module.parent) {
    app.listen(process.env.SERVER_PORT);
}
module.exports = app;

// eslint-disable-next-line no-console
console.log('Listening on port ' + process.env.SERVER_PORT);
