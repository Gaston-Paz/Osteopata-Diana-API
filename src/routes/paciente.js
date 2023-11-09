const { Router } = require('express');
const controllers = require('../controllers/index');

const router = Router();

router.get('/', controllers.paciente.getAllPacientes);
router.get('/:id', controllers.paciente.getPacienteById);
router.post('/', controllers.paciente.createPaciente);
router.put('/:id', controllers.paciente.updatePaciente);
router.delete('/:id', controllers.paciente.deletePaciente);

module.exports = router;