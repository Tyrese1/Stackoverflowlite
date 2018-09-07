import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';

import QuestionApiJSObject from './src/apiJSObject/controller/Question';
import QuestionApiDatabase from './src/apiDatabase/controller/Question';
import UserApiDatabase from './src/apiDatabase/controller/Users';
import Auth from './src/apiDatabase/middleware/Auth';

dotenv.config();
const Question = process.env.TYPE === 'db' ? QuestionApiDatabase : QuestionApiJSObject;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Welcome to Andela!'}); 
});
//enpoints
app.post('/api/v1/questions', Auth.verifyToken, Question.create);
app.get('/api/v1/questions', Auth.verifyToken, Question.getAll);
app.get('/api/v1/questions/:id', Auth.verifyToken, Question.getOne);
app.put('/api/v1/questions/:id', Auth.verifyToken, Question.update);
app.delete('/api/v1/questions/:id', Auth.verifyToken, Question.delete);
app.post('/api/v1/users', UserApiDatabase.create);
app.post('/api/v1/users/login', UserApiDatabase.login);
app.delete('/api/v1/users/me', Auth.verifyToken, UserApiDatabase.delete);

app.listen(3000)
console.log('app running on port ', 3000);