import moment from 'moment';
import uuid from 'uuid';

class Question {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.questions = [];
  }
  /**
   * 
   * @returns {object} question object
   */
  create(data) {
    const newQuestion = {
      id: uuid.v4(),
      user_question: data.user_question || '',   
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.questions.push(newQuestion);
    return newQuestion
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} question object
   */
  findOne(id) {
    return this.questions.find(reflect => reflect.id === id);
  }
  /**
   * @returns {object} returns all questions
   */
  findAll() {
    return this.questions;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const question = this.findOne(id);
    const index = this.questions.indexOf(question);
    this.questions[index].user_question = data['user_question'] || question.user_question;  
    this.questions[index].modifiedDate = moment.now()
    return this.questions[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const question = this.findOne(id);
    const index = this.questions.indexOf(question);
    this.questions.splice(index, 1);
    return {};
  }
}
export default new Question();
