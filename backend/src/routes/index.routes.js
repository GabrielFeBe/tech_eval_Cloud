const {Router} = require('express');
const filmesRouter = require('./filmes.routes');
const atoresRouter = require('./atores.routes');

const router = Router();
router.use('/filmes', filmesRouter);
router.use('/atores', atoresRouter);

module.exports = router;