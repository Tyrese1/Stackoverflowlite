import AnswerModel from '../models/Answer';

const Answer = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} answer object 
   */
  create(req, res) {
    if (!req.body.user_answer && !req.body.lowPoint && !req.body.takeAway) {
      return res.status(400).send({'message': 'All fields are required'})
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
  getOne(req, res) {
    const answer = AnswerModel.findOne(req.params.id);
    if (!answer) {
      return res.status(404).send({'message': 'answer not found'});
    }
    return res.status(200).send(answer);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated answer
   */
  update(req, res) {
    const answer = AnswerModel.findOne(req.params.id);
    if (!answer) {
      return res.status(404).send({'message': 'answer not found'});
    }
    const updatedAnswer = AnswerModel.update(req.params.id, req.body)
    return res.status(200).send(updatedAnswer);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const answer = AnswerModel.findOne(req.params.id);
    if (!answer) {
      return res.status(404).send({'message': 'answer not found'});
    }
    const ref = AnswerModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Answer;
