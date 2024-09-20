const obj = {
    DEFAULT_SUCCESS: {
        code: 200,
        message: '查询成功',
    },

    DEFAULT_ERROR: {
        code: 188,
        message: '出现错误',
    },

    LACK: {
        code: 199,
        message: '缺少必要参数',
    },

    TOKEN_ERROR: {
        code: 401,
        message: 'Token验证失败',
    },

    LOGIN_ERROR: {
        code: 101,
        message: '用户名或者密码错误',
    },

    ADMIN_NOT_EXIST: {
        code: 102,
        message: '管理员信息不存在',
    },
};

module.exports = obj;