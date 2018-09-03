import express from 'express';
import Question from './src/controllers/Question';
import Answer from './src/controllers/Answer';
import Auth from './src/controllers/auth';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'New Andela endpoint project'});
})
//Signup and login operation endpoint
// app.post('/api/auth/signup', Question.create);
// app.post('/api/auth/login', Question.create);

// const userController = require('../src/controllers/user');


//Question operarion endpoint
app.post('/api/v1/auth', Auth.create);
app.get('/api/v1/auth', Auth.getAll);
app.get('/api/v1/auth/:id', Auth.getOne);
app.post('/api/v1/questions/:id/answers', Question.create);
app.post('/api/v1/questions', Question.create);
app.get('/api/v1/questions', Question.getAll);
app.get('/api/v1/questions/:id', Question.getOne);
app.put('/api/v1/questions/:id', Question.update);
app.delete('/api/v1/questions/:id', Question.delete);

//Answer operation endpoint
app.post('/api/v1/answers/', Answer.create); 
app.put('/api/v1/questions/:id/answers/:id', Answer.update);
//app.put('/api/v1/answers/:id', Answer.update);

app.listen(3000)
console.log('app running on port ', 3000);