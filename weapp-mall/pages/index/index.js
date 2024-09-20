Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getPhoneNumber(e) {
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var myPluginInterface = requirePlugin('qiyu');

    var appId = 'wxfd77b6e69fb10894';
    myPluginInterface.__configAppId(appId);  // 不是微信的appId，ID为七鱼后台该小程序设置的APPID（可能是默认随机生成或自定义的）
    myPluginInterface._$configAppKey('1145b424b74ee356da8e79e1d7fb6053'); // 申请企业的appKey
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
