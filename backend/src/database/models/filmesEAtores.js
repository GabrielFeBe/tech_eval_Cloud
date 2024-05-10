const { DataTypes, Model, ModelDefined, Optional } = require('sequelize');
const db = require('./index');
const Atores = require('./atores');
const Filmes = require('./filmes');

const FilmesEAtores = db.define('filmesEAtores', { 
   atorId: {
       type: DataTypes.INTEGER,
       allowNull: false
   },
   filmeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
   },
} ,  {
  tableName: 'filmesEAtores',
  timestamps: false,
  underscored: true,
});

Atores.belongsToMany(Filmes, { through: FilmesEAtores, foreignKey: 'atorId' });
Filmes.belongsToMany(Atores, { through: FilmesEAtores, foreignKey: 'filmeId' });

module.exports = FilmesEAtores;