import AnswerModel from '../models/Answer';

const Answer = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} answer object 
   */
  //Create answer
  create(req, res) {
    if (!req.body.userAnswer) {
      return res.status(400).send({'message': 'You are required to enter character in all fields'})
    }
    const answer = AnswerModel.create(req.body);
    return res.status(201).send(answer);
    
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} answers array
   */ 
  //Get all answers
  getAll(req, res) {
    const answers = AnswerModel.findAll();
    return res.status(200).send(answers);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} answer object
   */
  //Get one answer with ID
  getOne(req, res) {
    const answer = AnswerModel.findOne(req.params.id);
    if (!answer) {
      return res.status(404).send({'message': 'Sorry the answer with the ID was not found'});
    }
    return res.status(200).send(answer);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated answer
   */
  //Update answer with ID
  update(req, res) {
    const answer = AnswerModel.findOne(req.params.id);
    if (!answer) {
      return res.status(404).send({'message': 'Sorry the answer with the ID was not found'});
    }
    const updatedAnswer = AnswerModel.update(req.params.id, req.body)
    return res.status(200).send(updatedAnswer);
  
  }
}

export default Answer;
