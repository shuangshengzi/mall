const Sequelize = require('sequelize');
const db = require('../db/wish_db');

const Wish = db.define('Wish', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
}, {
    underscored: true,
    tableName: 'wish',
});

module.exports = Wish;
