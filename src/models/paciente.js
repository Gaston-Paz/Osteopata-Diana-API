const db = require('../config/dbConfig');

function getAllPacientes() {
  return db.query('SELECT p.id_paciente, p.nombre, p.apellido, p.fecha_nacimiento, p.nacio, p.otros, p.ocupacion, p.localidad, p.de_parte, p.email, p.celular FROM Pacientes AS p');
}

function getPacienteById(pacienteId) {
  return db.query('SELECT p.id_paciente, p.nombre, p.apellido, p.fecha_nacimiento, p.nacio, p.otros, p.ocupacion, p.localidad, p.de_parte, p.email, p.celular FROM Pacientes AS p WHERE p.id_paciente = ?', [pacienteId]);
}

function createPaciente(paciente) {
  return db.query('INSERT INTO Pacientes (nombre, apellido, fecha_nacimiento, nacio, otros, ocupacion, localidad, de_parte, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
  return db.query('UPDATE Pacientes SET nombre = ?, apellido = ?, fecha_nacimiento = ?, nacio = ?, otros = ?, ocupacion = ?, localidad = ?, de_parte = ?, email = ?, celular = ? WHERE id_paciente = ?', [
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

function deletePaciente(pacienteId) {
  return db.query('DELETE FROM Pacientes WHERE id_paciente = ?', [pacienteId]);
}

module.exports = {
  getAllPacientes,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
};
