import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';

import QuestionApiJSObject from './src/apiJSObject/controller/Question';
import QuestionApiDatabase from './src/apiDatabase/controller/Question';
import AnswerApiJSObject from './src/apiJSObject/controller/Answer';
import AnswerApiDatabase from './src/apiDatabase/controller/Answer';
import UserApiDatabase from './src/apiDatabase/controller/Users';
import Auth from './src/apiDatabase/middleware/Auth';

dotenv.config();
const Question = process.env.TYPE === 'db' ? QuestionApiDatabase : QuestionApiJSObject;
const Answer = process.env.TYPE === 'db' ? AnswerApiDatabase : AnswerApiJSObject;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Welcome to Andela!'}); 
});
//Questions enpoints
app.post('/api/v1/questions', Auth.verifyToken, Question.create);
app.get('/api/v1/questions', Auth.verifyToken, Question.getAll);
app.get('/api/v1/questions/:id', Auth.verifyToken, Question.getOne);
app.put('/api/v1/questions/:id', Auth.verifyToken, Question.update);
app.delete('/api/v1/questions/:id', Auth.verifyToken, Question.delete);
app.post('/api/v1/auth/signup', UserApiDatabase.create);
app.post('/api/v1/auth/login', UserApiDatabase.login);
app.delete('/api/v1/auth/me', Auth.verifyToken, UserApiDatabase.delete);

//Answer endpoints
app.post('/api/v1/questions/questions/:id/answers', Auth.verifyToken, Answer.create);
app.post('/api/v1/questions/answers', Auth.verifyToken, Answer.create);


app.listen(3000)
console.log('app running on port ', 3000);