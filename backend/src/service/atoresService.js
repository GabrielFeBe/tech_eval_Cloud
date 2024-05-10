const Atores = require('../database/models/atores');

const criaOuAtualizaAtor = async ({id, nome, dataDeNascimento, nacionalidade}) => {
  // checa se é chamada com id pra invez de criar um novo ator atualizar um existente;
  if(id) {
    const ator = await Atores.findByPk(id);
    ator.nome = nome;
    ator.dataDeNascimento = dataDeNascimento;
    ator.nacionalidade = nacionalidade;
    await ator.save();
    return ator;

  } else {
    const ator = await Atores.create({ nome, dataDeNascimento, nacionalidade });
    return ator;
  }
}

const buscaAtores = async () => {
  const atores = await Atores.findAll();
  return atores;
}

const buscaAtor = async (id) => {
  const ator = await Atores.findByPk(id);
  return ator;
}

const deletaAtor = async (id) => {
  await Atores.destroy({ where: { id } });
}

module.exports = {
  criaOuAtualizaAtor,
  buscaAtores,
  buscaAtor,
  deletaAtor
}