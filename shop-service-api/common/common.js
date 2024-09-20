const async = require('async');
const Constant = require('../constant/constant');

/**
 * 深拷贝对象
 * @param {Object} obj
 */
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * 校验参数全局方法
 * @param {Array} params
 * @param {Array} checkArr
 * @param {Fn} cb
 */
function checkParams(params, checkArr, cb) {
    let flag = true;
    checkArr.forEach(v => {
        if (!params[v]) {
            flag = false;
        }
    });

    if (flag) {
        console.log(122)
        cb(null);
    } else {
        cb(Constant.LACK);
    }
}

/**
 * 返回统一方法
 * @param {*} tasks
 * @param {*} res
 * @param {*} resObj
 */
function autoFn(tasks, res, resObj) {
    async.auto(tasks, err => {
        if (!!err) {
            console.log(JSON.stringify(err));
            res.json({
                code: err.code || Constant.DEFAULT_ERROR.code,
                data: null,
                message: err.message || JSON.stringify(err),
            });
        } else {
            res.json(resObj);
        }
    });
}

module.exports = {
    clone,
    checkParams,
    autoFn,
};

