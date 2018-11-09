//app.js
// const api = require('/utils/api');
const cloudApi = require('/utils/cloudApi');

App({
  onLaunch: function(x) {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    wx.getSystemInfo({
      success: (res) => {
        this.store.sizeRate = 750 / res.windowWidth;
      }
    })
  },

  store: {
    sizeRate: null,
    cloudApi,
  }
})
