const { DataTypes, Model, ModelDefined, Optional } = require('sequelize');
const db = require('./index');
const Atores = require('./atores');

const Filmes = db.define('Filmes', { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anoDeLancamento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estaDisponivel: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
} ,{
    tableName: 'filmes',
    timestamps: false,
    underscored: true,
});

Filmes.belongsToMany(Atores, {through: 'filmesEAtores', foreignKey: 'filmeId'});

module.exports = Filmes;