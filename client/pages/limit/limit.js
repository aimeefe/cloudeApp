//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    fixed: false
  },
  onLoad() {
    this.getLimitProduct();
    this.handleTimeBarPosition();
  },

  /**
   * 限时特价列表
   */
  getLimitProduct() {
    app.store.api.getLimitProduct({}).then(r => {
      this.setData({
        limit: {
          list: r.data
        }
      })
    })
  },

  /**
   * 获取时间条距离顶部高度
   */
  handleTimeBarPosition() {
    wx.createIntersectionObserver().relativeToViewport().observe('.banner', res => {
      this.setData({
        fixed: !res.intersectionRatio
      })
    })
  },
})
