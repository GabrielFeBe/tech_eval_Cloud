const { DataTypes, Model, ModelDefined, Optional } = require('sequelize');
const db = require('./index');
const Filmes = require('./filmes');


const Atores = db.define('Atores', { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dataDeNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nacionalidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
}, {
    tableName: 'atores',
    timestamps: false,
    underscored: true,
});

Atores.belongsToMany(Filmes, {through: 'filmesEAtores', foreignKey: 'atorId'});

module.exports = Atores;