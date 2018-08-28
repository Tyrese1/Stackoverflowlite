import QuestionModel from '../models/Question';

const Question = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} question object 
   */
  //Create question
  create(req, res) {
    if (!req.body.userQuestion) {
      return res.status(400).send({'message': 'You are required to enter character in all fields'})
    }
    const question = QuestionModel.create(req.body);
    return res.status(201).send(question);
    
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} questions array
   */ 
  //Get all questions
  getAll(req, res) {
    const questions = QuestionModel.findAll();
    return res.status(200).send(questions);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} question object
   */
  //Get one question with ID
  getOne(req, res) {
    const question = QuestionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404).send({'message': 'Sorry the question with the ID was not found'});
    }
    return res.status(200).send(question);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated question
   */
  //Update question with ID
  update(req, res) {
    const question = QuestionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404).send({'message': 'Sorry the question with the ID was not found'});
    }
    const updatedQuestion = QuestionModel.update(req.params.id, req.body)
    return res.status(200).send(updatedQuestion);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  //Delete a question with ID
  delete(req, res) {
    const question = QuestionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404).send({'message': 'Sorry the question with the ID was not found'});
    }
    const ref = QuestionModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Question;
