const  service = require('../service/atoresService')


const buscaAtores = async (req, res) => {
  const atores = await service.buscaAtores();
  res.status(200).json(atores);
}

const buscaAtor = async (req, res) => {
  const { id } = req.params;
  const ator = await service.buscaAtor(id);
  if(!ator) return res.status(404).json({ message: 'Ator não encontrado' });
  res.status(200).json(ator);
}

const criaAtor = async (req, res) => {
  const { nome, dataDeNascimento, nacionalidade } = req.body;
  if(!nome || !dataDeNascimento || !nacionalidade) return res.status(400).json({ message: 'Dados inválidos' });
  const ator = await service.criaOuAtualizaAtor({ nome, dataDeNascimento, nacionalidade });
  res.status(201).json(ator);
}

const atualizaAtor = async (req, res) => {
  const { id } = req.params;
  const { nome, dataDeNascimento, nacionalidade } = req.body;
  if(!nome || !dataDeNascimento || !nacionalidade) return res.status(400).json({ message: 'Dados inválidos' });
  const ator = await service.criaOuAtualizaAtor({ id, nome, dataDeNascimento, nacionalidade });
  res.status(200).json(ator);
}

const deletaAtor = async (req, res) => {
  const { id } = req.params;
  await service.deletaAtor(id);
  res.status(204).end();
}

module.exports = {
  buscaAtores,
  buscaAtor,
  criaAtor,
  atualizaAtor,
  deletaAtor
}