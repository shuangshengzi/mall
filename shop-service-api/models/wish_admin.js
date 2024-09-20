const Sequelize = require('sequelize');
const db = require('../db/wish_db');

const WishAdmin = db.define('WishAdmin', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },

    username: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },

    password: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },

    name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },

    role: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    lastLoginAt: {
        type: Sequelize.DATE,
    },
}, {
    underscored: true,
    tableName: 'wish_admin',
});

module.exports = WishAdmin;