import moment from 'moment';
import uuidv4 from 'uuid/v4';
import db from '../db';

const Answer  = {
  /**
   * Create A Answer 
   * @param {object} req 
   * @param {object} res
   * @returns {object} answer object 
   */
  async create(req, res) {
    const createQuery = `INSERT INTO
      answers(id, user_answer, answer_id, created_date, modified_date)
      VALUES($1, $2, $3, $4, $5) returning *`;
    const values = [
      uuidv4(),
      req.body.user_answer,      
      req.user.id,
      moment(new Date()),
      moment(new Date())
      
    ];
   

    try {
      const { rows } = await db.query(createQuery, values);
      return res.status(201).send(rows[0]);
    } catch(error) {
      return res.status(400).send(error);
      
    }
  },
  /**
   * Get All Answers
   * @param {object} req 
   * @param {object} res 
   * @returns {object} answers array
   */
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM answers WHERE answer_id = $1';
    try {
      const { rows, rowCount } = await db.query(findAllQuery, [req.user.id]);
      return res.status(200).send({ rows, rowCount });
    } catch(error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get A answer 
   * @param {object} req 
   * @param {object} res
   * @returns {object} answer  object
   */
  async getOne(req, res) {
    const text = 'SELECT * FROM answers WHERE id = $1 AND answer_id = $2';
    try {
      const { rows } = await db.query(text, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({'message': 'answer  not found'});
      }
      return res.status(200).send(rows[0]);
    } catch(error) {
      return res.status(400).send(error)
    }
  },
  /**
   * Update A Answer 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated answer 
   */
  async update(req, res) {
    const findOneQuery = 'SELECT * FROM answers WHERE id=$1 AND answer_id = $2';
    const updateOneQuery =`UPDATE answers
      SET user_answer=$1,modified_date=$2
      WHERE id=$3 AND answer_id = $4 returning *`;
    try {
      const { rows } = await db.query(findOneQuery, [req.params.id, req.user.id]);
      if(!rows[0]) {
        return res.status(404).send({'message': 'answer not found'});
      }
      const values = [
        req.body.user_answer || rows[0].user_answer,       
        moment(new Date()),
        req.params.id,
        req.user.id
      ];
      const response = await db.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch(err) {
      return res.status(400).send(err);
    }
  },
  /**
   * Get A answer-to-question
   * @param {object} req 
   * @param {object} res
   * @returns {object} answer-to-question object
   */
  async getOneQA(req, res) {
    const text = 'SELECT * FROM answers WHERE id = $1 AND answer_id = $2';
    try {
      const { rows } = await db.query(text, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({'message': 'answer  not found'});
      }
      return res.status(200).send(rows[0]);
    } catch(error) {
      return res.status(400).send(error)
    }
  },
  /**
   * Delete A answer 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  async delete(req, res) {
    const deleteQuery = 'DELETE FROM answers WHERE id=$1 AND answer_id = $2 returning *';
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id, req.user.id]);
      if(!rows[0]) {
        return res.status(404).send({'message': 'answer not found'});
      }
      return res.status(204).send({ 'message': 'deleted' });
    } catch(error) {
      return res.status(400).send(error);
    }
  }
}

export default Answer;
