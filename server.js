import express from 'express';
import Question from './src/controllers/Question';
<<<<<<< HEAD
=======
import Answer from './src/controllers/Answer';
>>>>>>> 28d9df8bd8e8db2cecda320c4cda061133b60ae0

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'New Andela endpoint project'});
})
//Signup and login operation endpoint
// app.post('/api/auth/signup', Question.create);
// app.post('/api/auth/login', Question.create);
//Question operarion endpoint
app.post('/api/v1/questions/:id/answers', Question.create);
app.post('/api/v1/questions', Question.create);
app.get('/api/v1/questions', Question.getAll);
app.get('/api/v1/questions/:id', Question.getOne);
app.put('/api/v1/questions/:id', Question.update);
app.delete('/api/v1/questions/:id', Question.delete);

<<<<<<< HEAD

=======
//Answer operation endpoint
app.post('/api/v1/answers/', Answer.create); 
app.put('/api/v1/questions/:id/answers/:id', Answer.update);
//app.put('/api/v1/answers/:id', Answer.update);
>>>>>>> 28d9df8bd8e8db2cecda320c4cda061133b60ae0

app.listen(3000)
console.log('app running on port ', 3000);