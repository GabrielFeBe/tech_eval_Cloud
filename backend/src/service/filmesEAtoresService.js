const {FilmesEAtores} = require('../database/models');

const relacionarFilmeEAtores = async ({filmeId, atorId}) => {
  const relacionamento = await FilmesEAtores.create({filmeId, atorId});
  return relacionamento;
}

module.exports = { 
  relacionarFilmeEAtores,
}