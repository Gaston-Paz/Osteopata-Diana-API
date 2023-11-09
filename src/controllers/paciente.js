const { response, request } = require('express');
const services = require('../services/index');

const getAllPacientes = async (res = response) => {

    const pacientes = await services.getAllPacientes();
    return res.json({
        results: pacientes
    });
}

module.exports = {
    getAllPacientes
}