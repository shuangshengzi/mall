import CONFIG from './config';

/**
 * request
 * @config
 */

const request = config => {
  console.log('config -->', config);
  const url = config.url.indexOf('/') === 0 ?
    `${CONFIG.baseURL}${config.url}` : `${CONFIG.baseURL}/${config.url}`;
  const data = config.data || {};

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method: config.method || 'GET',
      header: config.header || {
        'content-type': 'application/json'
      },
      data,
      dataType: 'json',
      success: response => {
        console.log('json -->', response);
        const {
          statusCode,
          data: result = {}
        } = response;
        if (statusCode === 200) { // 状态码
          const {
            code = 201, data: res
          } = result; // 返回实际结果内容
          if (code === 200) resolve(res);

          if (code === 401) reject(res);

        }
      },
      fail: e => {
        reject(e);
      },
    });
  });
}

export default request;