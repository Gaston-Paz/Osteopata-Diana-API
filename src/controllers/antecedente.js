const { response, request } = require('express');
const services = require('../services/index');

const getAntecedenteById = async (req = request, res = response) => {
    const { id } = req.params;
    const antecedente = await services.antecedente.getAntecedenteById(id);
    return res.json({
        antecedente: antecedente
    });
}

module.exports = {
    getAntecedenteById
}