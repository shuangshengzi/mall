const Token = require('../../token');
const Constant = require('../../constant/constant');

function verifyToken(req, res, next) {
    if (req.path === '/login') return next();
    let token = req.headers.token || '';
    let tokenVerifyObj = Token.decrypt(token);
    if (tokenVerifyObj.token) {
        next();
    } else {
        res.json(Constant.TOKEN_ERROR);
    }
}

module.exports = {
    verifyToken,
};