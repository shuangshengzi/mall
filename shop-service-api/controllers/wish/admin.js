const Common = require('../../common/common');
const Constant = require('../../constant/constant');
const moment = require('moment');

const WishAdminModel = require('../../models/wish_admin');
const Token = require('../../token');
const TOKEN_EXPIRE_SECOND = 3600;

function login(req, res) {
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);
    let tasks = {
        checkParams: cb => {
            Common.checkParams(req.body, ['username', 'password'], cb);
        },
        query: ['checkParams', (results, cb) => {
            WishAdminModel
                .findOne({
                    where: {
                        username: req.body.username,
                        password: req.body.password,
                    },
                })
                .then(result => {
                    console.log('====results', results);
                    if (result) {
                        resObj.data = {
                            id: result.id,
                            username: result.username,
                            name: result.name,
                            role: result.role,
                            lastLoginAt: result.lastLoginAt ? moment(result.lastLoginAt).format('yyyy-mm-dd HH:MM:ss') : moment(new Date()).format('yyyy-mm-dd HH:MM:ss'),
                            createdAt: moment(result.createAt).format('yyyy-mm-dd HH:MM:ss'),
                        };

                        let adminInfo = {
                            id: result.id,
                        };

                        let token = Token.encrypt(adminInfo, TOKEN_EXPIRE_SECOND);
                        resObj.data.token = token;
                        cb(null, result.id);
                    } else {
                        cb(Constant.LOGIN_ERROR);
                    }
                })
                .catch(err => {
                    console.log(err);
                    cb(Constant.DEFAULT_ERROR);
                });
        }],
        writeLastLoginAt: ['query', (results, cb) => {
            console.log('====>results', results)
            let adminId = results['query'];
            WishAdminModel
                .update({
                    lastLoginAt: new Date(),
                }, {
                    where: {
                        id: adminId,
                    },
                })
                .then(result => {
                    if (result) {
                        cb(null);
                    } else {
                        cb(Constant.DEFAULT_ERROR);
                    }
                })
                .catch(err => {
                    console.log(err);
                    cb(Constant.DEFAULT_ERROR);
                });
        }],
    };

    Common.autoFn(tasks, res, resObj);
}

function list() {}
function getItem() {}
function add() {}
function update() {}
function remove() {}

module.exports = {
    login,
    list,
    getItem,
    add,
    update,
    remove,
};