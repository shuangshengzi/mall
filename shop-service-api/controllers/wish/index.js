const async = require('async');
const Common = require('../../common/common');
const WishModel = require('../../models/wish');
const Constant = require('../../constant/constant');

function getList(req, res) {
    let tasks = {
        query: cb => {
            WishModel
                .findAll({
                    limit: 10,
                    order: [['created_at', 'DESC']],
                })
                .then(result => {
                    let list = [];
                    result.forEach((v, i) => {
                        let obj = {
                            id: v.id,
                            name: v.name,
                            content: v.content,
                        };

                        list.push(obj);
                    });

                    cb(null, list);
                })
                .catch(err => {
                    console.log(err);
                    cb(Constant.DEFAULT_ERROR);
                });
        },
    };

    async.auto(tasks, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                code: 200,
                data: result['query'],
                message: Constant.DEFAULT_SUCCESS.message,
            });
        }
    });
}

function add(req, res) {
    let tasks = {
        checkParams: cb => {
            Common.checkParams(req.body, ['name', 'content'], cb);
        },
        add: [
            'checkParams', (results, cb) => {
                WishModel
                    .create({
                        name: req.body.name,
                        content: req.body.content,
                    })
                    .then(result => {
                        cb(null);
                    })
                    .catch(err => {
                        console.log('err ===> ', err);
                        cb(Constant.DEFAULT_ERROR);
                    });
            }
        ]
    };

    async.auto(tasks, (err, result) => {
        if (err) {
            console.log(err);
            let message = '添加失败, 出现错误';
            if (err.code === 199) {
                message = '添加失败, 参数不全';
            }

            res.json({
                code: err.code,
                data: null,
                message,
            });
        } else {
            res.json({
                code: 200,
                data: null,
                message: '添加成功',
            });
        }
    });
}

module.exports = {
    getList,
    add,
};