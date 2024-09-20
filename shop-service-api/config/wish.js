const config = {
    DEBUG: true,
    MYSQL: {
        host: 'localhost',
        database: 'db',
        username: 'root',
        password: '12345678',
    },
};

if (process.env.NODE_ENV === 'production') {
    // TODO prod mysql config.
    config.MYSQL = {};
}

module.exports = config;