'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Question = require('./src/controllers/Question');

var _Question2 = _interopRequireDefault(_Question);

var _Answer = require('./src/controllers/Answer');

var _Answer2 = _interopRequireDefault(_Answer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'New Andela endpoint project' });
});
//Signup and login operation endpoint
// app.post('/api/auth/signup', Question.create);
// app.post('/api/auth/login', Question.create);
//Question operarion endpoint
app.post('/api/v1/questions', _Question2.default.create);
app.get('/api/v1/questions', _Question2.default.getAll);
app.get('/api/v1/questions/:id', _Question2.default.getOne);
app.put('/api/v1/questions/:id', _Question2.default.update);
app.delete('/api/v1/questions/:id', _Question2.default.delete);

//Answer operation endpoint
app.post('/api/v1/answers/', _Answer2.default.create);
// app.put('/api/v1/questions/answers/answers/:id', Question.update);

app.listen(3000);
console.log('app running on port ', 3000);