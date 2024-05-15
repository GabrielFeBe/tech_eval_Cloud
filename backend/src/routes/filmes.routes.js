const {Router} = require('express');
const filmesController = require('../controller/filmes.controller');

const router = Router();

router.get('/', (req, res) => filmesController.buscaFilmes(req, res));
router.get('/titulo', (req, res) => filmesController.buscaFilmesPorTitulo(req, res));
router.get('/:id', (req, res) => filmesController.buscaFilme(req, res));
router.post('/', (req, res) => filmesController.criaFilme(req, res));
router.put('/:id', (req, res) => filmesController.atualizaFilme(req, res));
router.delete('/:id', (req, res) => filmesController.deletaFilme(req, res));

module.exports = router;