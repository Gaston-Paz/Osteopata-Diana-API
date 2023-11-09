const db = require('../config/dbConfig');

function getAllPacientes() {
  return db.query('SELECT p.nombre, p.apellido, p.fechaNacimiento, p.nacio, p.otros, p.ocupacion, p.localidad, p.deParteDe, p.email, p.celular FROM Pacientes AS p');
}

function getPacienteById(pacienteId) {
  return db.query('SELECT * FROM Pacientes AS p WHERE p.id = ?', [pacienteId]);
}

function createPaciente(paciente) {
  return db.query('INSERT INTO Pacientes (nombre, apellido, fechaNacimiento, nacio, otros, ocupacion, localidad, deParteDe, email, celular) VALUES (?, ?)', [
    paciente.nombre,
    paciente.apellido,
    paciente.fechaNacimiento,
    paciente.nacio,
    paciente.otros,
    paciente.ocupacion,
    paciente.localidad,
    paciente.deParteDe,
    paciente.email,
    paciente.celular,
  ]);
}

function updatePaciente(paciente) {
  return db.query('UPDATE Pacientes SET nombre = ?, apellido = ?, fechaNacimiento = ?, nacio = ?, otros = ?, ocupacion = ?, localidad = ?, deParteDe = ?, email = ?, celular = ? WHERE id = ?', [
    paciente.nombre,
    paciente.apellido,
    paciente.fechaNacimiento,
    paciente.nacio,
    paciente.otros,
    paciente.ocupacion,
    paciente.localidad,
    paciente.deParteDe,
    paciente.email,
    paciente.celular,
    paciente.id,
  ]);
}

function deletePaciente(paciente) {
  return db.query('DELETE FROM Pacientes WHERE id = ?', [paciente.id]);
}

module.exports = {
  getAllPacientes,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
};
