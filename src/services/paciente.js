const model = require('../models/index');

async function getAllPacientes() {
    try {
      const pacientes = await model.getAllPacientes();
      return pacientes;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching users from the database');
    }
  }

module.exports = {
    getAllPacientes
}