const { Router } = require('express');
const controllers = require('../controllers/index');

const router = Router();

router.get('/:id', controllers.antecedente.getAntecedenteById);

module.exports = router;