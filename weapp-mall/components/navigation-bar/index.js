Component({
  properties: {
    navBarTitle: {
      type: String,
      value: 'mall',
    },
  },

  ready() {
    const menuButtonRect = wx.getMenuButtonBoundingClientRect();
    const systemInfo = wx.getSystemInfoSync();

    const navBarContentHeight = (menuButtonRect.top - systemInfo.statusBarHeight) * 2
      + menuButtonRect.height + systemInfo.statusBarHeight;

    const customNavBarInfo = {
      // nav-bar高度
      navBarContentHeight,

      // 胶囊信息
      menuBtnTop: menuButtonRect.top,
      menuBtnRight: systemInfo.screenWidth - menuButtonRect.right,
      menuBtnHeight: menuButtonRect.height,
      menuBtnWidth: menuButtonRect.width,
    };

    this.setData({...customNavBarInfo});
    // TODO：更新到全局缓存
  },

  methods: {
    onBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        wx.navigateBack();
      } else {
        wx.reLaunch({
          url: '/pages/index/index',
        });
      }
    },
  }
})
