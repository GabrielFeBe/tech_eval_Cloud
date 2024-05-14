const { Filmes, Atores } = require('../database/models');

const criaOuAtualizaFilme = async ({id, titulo, anoDeLancamento, estaDisponivel}) => {
  // checa se é chamada com id pra invez de criar um novo filme atualizar um existente;
  if(id) {
    const filme = await Filmes.findByPk(id);
    filme.titulo = titulo;
    filme.anoDeLancamento = anoDeLancamento;
    filme.estaDisponivel = estaDisponivel;
    await filme.save();
    return filme;

  } else {
    const filme = await Filmes.create({ titulo, anoDeLancamento, estaDisponivel });
    return filme;
  }
}

const buscaFilmes = async () => {
  const filmes = await Filmes.findAll();
  return filmes;
}

const buscaFilme = async (id) => {
  const filme = await Filmes.findByPk(id, {
    include: [{
      model: Atores, as: 'atores', through: { attributes: [] }
    }]
  
  });
  return filme;
}

const deletaFilme = async (id) => {
  await Filmes.destroy({ where: { id } });
}

module.exports = {
  criaOuAtualizaFilme,
  buscaFilmes,
  buscaFilme,
  deletaFilme
};