module.exports = (sequelize, DataTypes) => {
    const Filmes = sequelize.define('Filmes', {
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
    }, {
        tableName: 'filmes',
        timestamps: false,
        underscored: true,
    })
    return Filmes;
}