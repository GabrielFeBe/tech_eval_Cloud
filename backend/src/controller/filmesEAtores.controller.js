const service = require('../service/filmesEAtoresService');

const relacionarFilmeEAtores = async (req, res) => {
  const { filmeId, atorId } = req.body;
  if(!filmeId || !atorId) return res.status(400).json({ message: 'Dados inválidos' });
  const relacionamento = await service.relacionarFilmeEAtores({filmeId, atorId});
  res.status(201).json(relacionamento);
}

module.exports = {
  relacionarFilmeEAtores,
}