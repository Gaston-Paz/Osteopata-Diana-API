const db = require('../config/dbConfig');

function getAntecedenteById(antecedenteId) {
  return db.query('SELECT * FROM Antecedentes AS p WHERE p.id = ?', [antecedenteId]);
}

function createAntecedente(antecedente) {
  return db.query('INSERT INTO Antecedentes (abortos_espontaneao, abortos_inducido, accidentes, alimentacion, cardiaco, cirugias, contencion, diabetes, digestivo, dolor_cabeza, duracion, edad_ortodoncia, embarazos, fracturas, frecuencia, fuma, implante_inferior, implante_superior, instestinal, medicacion, menstruacion, ortodoncia, oseo, otras_drogas, otros, partos, perdidas, piezas_faltantes_inf, piezas_faltantes_sup, placa_descanso, protesis, respiratorio, tiroides, urogenital, volumen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
    antecedente.abortos_espontaneao,
    antecedente.abortos_inducido,
    antecedente.accidentes,
    antecedente.alimentacion,
    antecedente.cardiaco,
    antecedente.cirugias,
    antecedente.contencion,
    antecedente.diabetes,
    antecedente.digestivo,
    antecedente.dolor_cabeza,
    antecedente.duracion,
    antecedente.edad_ortodoncia,
    antecedente.embarazos,
    antecedente.fracturas,
    antecedente.frecuencia,
    antecedente.fuma,
    antecedente.implante_inferior,
    antecedente.implante_superior,
    antecedente.instestinal,
    antecedente.medicacion,
    antecedente.menstruacion,
    antecedente.ortodoncia,
    antecedente.oseo,
    antecedente.otras_drogas,
    antecedente.otros,
    antecedente.partos,
    antecedente.perdidas,
    antecedente.piezas_faltantes_inf,
    antecedente.piezas_faltantes_sup,
    antecedente.placa_descanso,
    antecedente.protesis,
    antecedente.respiratorio,
    antecedente.tiroides,
    antecedente.urogenital,
    antecedente.volumen
  ]);
}

function updateAntecedente(antecedente) {
  return db.query('UPDATE Antecedentes SET abortos_espontaneao = ?, abortos_inducido = ?, accidentes = ?, alimentacion = ?, cardiaco = ?, cirugias = ?, contencion = ?, diabetes = ?, digestivo = ?, dolor_cabeza = ?, duracion = ?, edad_ortodoncia = ?, embarazos = ?, fracturas = ?, frecuencia = ?, fuma = ?, implante_inferior = ?, implante_superior = ?, instestinal = ?, medicacion = ?, menstruacion = ?, ortodoncia = ?, oseo = ?, otras_drogas = ?, otros = ?, partos = ?, perdidas = ?, piezas_faltantes_inf = ?, piezas_faltantes_sup = ?, placa_descanso = ?, protesis = ?, respiratorio = ?, tiroides = ?, urogenital = ?, volumen WHERE id = ?', [
    antecedente.abortos_espontaneao,
    antecedente.abortos_inducido,
    antecedente.accidentes,
    antecedente.alimentacion,
    antecedente.cardiaco,
    antecedente.cirugias,
    antecedente.contencion,
    antecedente.diabetes,
    antecedente.digestivo,
    antecedente.dolor_cabeza,
    antecedente.duracion,
    antecedente.edad_ortodoncia,
    antecedente.embarazos,
    antecedente.fracturas,
    antecedente.frecuencia,
    antecedente.fuma,
    antecedente.implante_inferior,
    antecedente.implante_superior,
    antecedente.instestinal,
    antecedente.medicacion,
    antecedente.menstruacion,
    antecedente.ortodoncia,
    antecedente.oseo,
    antecedente.otras_drogas,
    antecedente.otros,
    antecedente.partos,
    antecedente.perdidas,
    antecedente.piezas_faltantes_inf,
    antecedente.piezas_faltantes_sup,
    antecedente.placa_descanso,
    antecedente.protesis,
    antecedente.respiratorio,
    antecedente.tiroides,
    antecedente.urogenital,
    antecedente.volumen
  ]);
}

function deleteAntecedente(antecedente) {
  return db.query('DELETE FROM Antecedentes WHERE id = ?', [antecedente.id]);
}

module.exports = {
  getAntecedenteById,
  createAntecedente,
  updateAntecedente,
  deleteAntecedente,
};
