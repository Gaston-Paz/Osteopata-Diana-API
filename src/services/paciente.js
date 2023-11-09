const model = require('../models/index');

async function getAllPacientes() {
    try {
      const pacientes = await model.paciente.getAllPacientes();
      return pacientes;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching users from the database');
    }
}

async function getPacienteById(id) {
  try {
    const paciente = await model.paciente.getPacienteById(id);
    return paciente;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching users from the database');
  }
}

async function createPaciente(paciente) {
  try {
    const paciente = await model.paciente.createPaciente(paciente);
    return paciente;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching users from the database');
  }
}

async function updatePaciente(paciente) {
  try {
    const paciente = await model.paciente.updatePaciente(paciente);
    return paciente;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching users from the database');
  }
}

async function deletePaciente(id) {
  try {
    const paciente = await model.paciente.deletePaciente(id);
    return paciente;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching users from the database');
  }
}

module.exports = {
    getAllPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente
}