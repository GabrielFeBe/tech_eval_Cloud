const { DataTypes, Model, ModelDefined, Optional } = require('sequelize');
const db = require('./index');


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


module.exports = Atores;