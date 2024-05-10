const { DataTypes, Model, ModelDefined, Optional } = require('sequelize');
const db = require('./index');

const FilmesEAtores = db.define('FilmesEAtores', { 
   atorId: {
       type: DataTypes.INTEGER,
       allowNull: false
   },
   filmeId: {
        type: DataTypes.INTEGER,
        allowNull: false
   },
});

module.exports = FilmesEAtores;