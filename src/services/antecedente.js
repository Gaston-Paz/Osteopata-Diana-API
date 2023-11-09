const model = require('../models/index');

async function getAntecedenteById(id) {
    try {
      const antecedente = await model.antecedente.getAntecedenteById(id);
      return antecedente;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching users from the database');
    }
  }

module.exports = {
    getAntecedenteById
}