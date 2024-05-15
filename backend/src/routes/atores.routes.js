const {Router} = require('express');
const atoresController = require('../controller/atores.controller');

const router = Router();

router.get('/', (req, res) => atoresController.buscaAtores(req, res));
router.get('/nome', (req, res) => atoresController.buscaAtoresPorNome(req, res));
router.get('/:id', (req, res) => atoresController.buscaAtor(req, res));
router.post('/', (req, res) => atoresController.criaAtor(req, res));
router.put('/:id', (req, res) => atoresController.atualizaAtor(req, res));
router.delete('/:id', (req, res) => atoresController.deletaAtor(req, res));

module.exports = router;