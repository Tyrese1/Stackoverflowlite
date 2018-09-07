'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

var _Question = require('./src/apiJSObject/controller/Question');

var _Question2 = _interopRequireDefault(_Question);

var _Question3 = require('./src/apiDatabase/controller/Question');

var _Question4 = _interopRequireDefault(_Question3);

var _Users = require('./src/apiDatabase/controller/Users');

var _Users2 = _interopRequireDefault(_Users);

var _Auth = require('./src/apiDatabase/middleware/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var Question = process.env.TYPE === 'db' ? _Question4.default : _Question2.default;
var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'Welcome to Andela!' });
});
//enpoints
app.post('/api/v1/questions', _Auth2.default.verifyToken, Question.create);
app.get('/api/v1/questions', _Auth2.default.verifyToken, Question.getAll);
app.get('/api/v1/questions/:id', _Auth2.default.verifyToken, Question.getOne);
app.put('/api/v1/questions/:id', _Auth2.default.verifyToken, Question.update);
app.delete('/api/v1/questions/:id', _Auth2.default.verifyToken, Question.delete);
app.post('/api/v1/users', _Users2.default.create);
app.post('/api/v1/users/login', _Users2.default.login);
app.delete('/api/v1/users/me', _Auth2.default.verifyToken, _Users2.default.delete);

app.listen(3000);
console.log('app running on port ', 3000);