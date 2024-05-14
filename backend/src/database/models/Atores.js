module.exports = (sequelize, DataTypes) => {
    const Atores = sequelize.define('Atores', {
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
    } ) 
    return Atores;
};