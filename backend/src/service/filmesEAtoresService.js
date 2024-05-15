const {FilmesEAtores} = require('../database/models');

const relacionarFilmeEAtores = async ({filmeId, atorId}) => {
  const relacionamento = await FilmesEAtores.create({filmeId, atorId});
  return relacionamento;
}

const deletarRelacionamento = async({filmeId, atorId}) => {
  await FilmesEAtores.destroy({ where: {filmeId, atorId}});
}

module.exports = { 
  relacionarFilmeEAtores,
}