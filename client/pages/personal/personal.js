//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: null
  },

  onLoad() {
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo')
      })
    }

  },

  // 登录
  handleLogin(e) {
    const userInfo = e.detail.rawData ? JSON.parse(e.detail.rawData) : null;
    // 存储用户信息
    wx.setStorageSync('userInfo', userInfo);
    this.setData({
      userInfo: userInfo
    })
  },

  //退出登录
  handleLogout() {
    wx.clearStorageSync('userInfo');
    this.setData({
      userInfo: null
    })
  },

  // 敬请期待
  showTipModal() {

  }
})
