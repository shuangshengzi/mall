const version = __wxConfig['envVersion'];

// 开发环境
const CONFIG = {
  baseURL: 'http://localhost:3000',
};

if (version === 'develop') { // 开发版

} else if (version === 'trial') { // 体验版

} else if (version === 'release') { // 正式版

}

export default CONFIG;
