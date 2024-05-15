const {Router} = require('express');
const filmesEAtoresController = require('../controller/filmesEAtores.controller');

const router = Router();

router.post('/', (req, res) => filmesEAtoresController.relacionarFilmeEAtores(req, res));
router.delete('/', (req, res) => filmesEAtoresController.deletarRelacionamento(req, res));

module.exports = router;