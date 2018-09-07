import QuestionModel from '../models/Question';

const Question = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} question object 
   */
  create(req, res) {
    if (!req.body.user_question) {
      return res.status(400).send({'message': 'All fields are required'})
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
  getAll(req, res) {
    const questions = QuestionModel.findAll();
    return res.status(200).send(Questions);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} question object
   */
  getOne(req, res) {
    const question = QuestionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404).send({'message': 'question not found'});
    }
    return res.status(200).send(question);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated question
   */
  update(req, res) {
    const question = QuestionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404).send({'message': 'question not found'});
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
  delete(req, res) {
    const question = QuestionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404).send({'message': 'question not found'});
    }
    const ref = QuestionModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Question;
