import moment from 'moment';
import uuid from 'uuid';

class Answer {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.answers = [];
  }
  /**
   * 
   * @returns {object} answer object
   */
  create(data) {
    const newAnswer = {
      id: uuid.v4(),
      user_answer: data.user_answer || '',    
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.answers.push(newAnswer);
    return newAnswer
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} answer object
   */
  findOne(id) {
    return this.answers.find(reflect => reflect.id === id);
  }
  /**
   * @returns {object} returns all answers
   */
  findAll() {
    return this.answers;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const answer = this.findOne(id);
    const index = this.answers.indexOf(answer);
    this.answers[index].user_answer = data['user_answer'] || answer.user_answer;
    this.answers[index].lowPoint = data['lowPoint'] || answer.lowPoint;
    this.answers[index].takeAway = data['takeAway'] || answer.takeAway;
    this.answers[index].modifiedDate = moment.now()
    return this.answers[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const answer = this.findOne(id);
    const index = this.answers.indexOf(answer);
    this.answers.splice(index, 1);
    return {};
  }
}
export default new Answer();
