const { response, request } = require('express');
const services = require('../services/index');

const getAllPacientes = async (req = request, res = response) => {

    const pacientes = await services.paciente.getAllPacientes();
    return res.json({
        pacientes: pacientes
    });
}

const getPacienteById = async (req = request, res = response) => {
    const { id } = req.params;
    const paciente = await services.paciente.getPacienteById(id);
    return res.json({
        paciente: paciente
    });
}

const createPaciente = async (req = request, res = response) => {
    let paciente = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        nacio: req.body.nacio,
        otros: req.body.otros,
        ocupacion: req.body.ocupacion,
        localidad: req.body.localidad,
        deParteDe: req.body.deParteDe,
        email: req.body.email,
        celular: req.body.celular,
    }
    paciente = await services.paciente.createPaciente(paciente);
    return res.json({
        paciente: paciente
    });
}

const updatePaciente = async (req = request, res = response) => {
    let paciente = {
        id_paciente: req.body.id_paciente,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        nacio: req.body.nacio,
        otros: req.body.otros,
        ocupacion: req.body.ocupacion,
        localidad: req.body.localidad,
        deParteDe: req.body.deParteDe,
        email: req.body.email,
        celular: req.body.celular,
    }
    paciente = await services.paciente.updatePaciente(paciente);
    return res.json({
        paciente: paciente
    });
}

const deletePaciente = async (req = request, res = response) => {
    const { id } = req.params;
    paciente = await services.paciente.deletePaciente(id);
    return res.json({
        paciente: paciente
    });
}

module.exports = {
    getAllPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente
}