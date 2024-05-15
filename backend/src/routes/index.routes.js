const {Router} = require('express');
const filmesRouter = require('./filmes.routes');
const atoresRouter = require('./atores.routes');
const filmesEAtoresRouter = require('./filmesEAtores.routes');

const router = Router();
router.use('/relacionar', filmesEAtoresRouter);
router.use('/filmes', filmesRouter);
router.use('/atores', atoresRouter);

module.exports = router;