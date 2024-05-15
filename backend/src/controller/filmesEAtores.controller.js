const service = require('../service/filmesEAtoresService');

const relacionarFilmeEAtores = async (req, res) => {
  const { filmeId, atorId } = req.body;
  if(!filmeId || !atorId) return res.status(400).json({ message: 'Dados inválidos' });
  const relacionamento = await service.relacionarFilmeEAtores({filmeId, atorId});
  res.status(201).json(relacionamento);
}

const deletarRelacionamento = async (req, res) => {
  const { filmeId, atorId } = req.body;
  await service.deletarRelacionamento({filmeId, atorId});
  res.status(204).end();
}

module.exports = {
  relacionarFilmeEAtores,
  deletarRelacionamento,
}