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
      userAnswer: data.userAnswer || '',
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
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const answer = this.findOne(id);
    const index = this.answers.indexOf(answer);
    this.answers[index].userAnswer = data['userAnswer'] || answer.useranswer; 
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
