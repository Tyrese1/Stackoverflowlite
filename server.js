import express from 'express';
import Question from './src/controllers/Question';

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



app.listen(3000)
console.log('app running on port ', 3000);