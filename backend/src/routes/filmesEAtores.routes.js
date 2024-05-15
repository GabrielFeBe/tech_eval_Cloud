const {Router} = require('express');
const filmesEAtoresController = require('../controller/filmesEAtores.controller');

const router = Router();

router.post('/', (req, res) => filmesEAtoresController.relacionarFilmeEAtores(req, res));

module.exports = router;