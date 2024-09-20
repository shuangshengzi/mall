const jwt = require('jsonwebtoken');
const tokenKey = 'liufei';

const Token = {
    encrypt: (data, time) => {
        console.log('====>', data, time)
        return jwt.sign(data, tokenKey, { expiresIn: time });
    },

    decrypt: token => {
        try {
            const data = jwt.verify(token, tokenKey);
            return {
                data,
                token: true,
            };
        } catch (e) {
            return {
                data: e,
                token: false,
            };
        }
    },
};

module.exports = Token;
