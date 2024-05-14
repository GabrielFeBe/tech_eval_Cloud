module.exports = (sequelize, DataTypes) => {
  const FilmesEAtores = sequelize.define(
    'FilmesEAtores',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'filmes_e_atores',
    }
  )
    FilmesEAtores.associate = (models) => {
        models.Filmes.belongsToMany(models.Atores, {
            through: FilmesEAtores,
            foreignKey: 'filmeId',
            as: 'atores',
            onDelete: 'CASCADE',
        });
        models.Atores.belongsToMany(models.Filmes, {
            through: FilmesEAtores,
            foreignKey: 'atorId',
            as: 'filmes',
            onDelete: 'CASCADE',
        });
    }

    return FilmesEAtores;
};