const {Sequelize} = require('sequelize');
const {development} = require('../config/conection');

const db = new Sequelize(development);

module.exports = db;