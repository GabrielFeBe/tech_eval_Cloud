const service = require('../service/filmeService')

const buscaFilme = async (req, res) => {
  const { id } = req.params;
  const filme = await service.buscaFilme(id);
  if(!filme) return res.status(404).json({ message: 'Filme não encontrado' });
  res.status(200).json(filme);
}

const buscaFilmes = async (req, res) => {
  const filmes = await service.buscaFilmes();
  res.status(200).json(filmes);
}

const criaFilme = async (req, res) => {
  const { titulo, anoDeLancamento, estaDisponivel } = req.body;
  if(!titulo || !anoDeLancamento || !estaDisponivel) return res.status(400).json({ message: 'Dados inválidos' });
  const filme = await service.criaOuAtualizaFilme({ titulo, anoDeLancamento, estaDisponivel });
  res.status(201).json(filme);
}

const atualizaFilme = async (req, res) => {
  const { id } = req.params;
  const { titulo, anoDeLancamento, estaDisponivel } = req.body;
  if(!titulo || !anoDeLancamento || !estaDisponivel) return res.status(400).json({ message: 'Dados inválidos' });
  const filme = await service.criaOuAtualizaFilme({ id, titulo, anoDeLancamento, estaDisponivel });
  res.status(200).json(filme);
}


const deletaFilme = async (req, res) => {
  const { id } = req.params;
  await service.deletaFilme(id);
  res.status(204).end();
}

const buscaFilmesPorTitulo = async (req, res) => {
  const { titulo } = req.query;
  const filmes = await service.buscarFilmesPorTitulo(titulo);
  res.status(200).json(filmes);
}

module.exports = {
  buscaFilme,
  buscaFilmes,
  criaFilme,
  atualizaFilme,
  deletaFilme,
  buscaFilmesPorTitulo,
}