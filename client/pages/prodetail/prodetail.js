//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    modal: null,
    myModal: {
      isShow: false,
    }
  },

  onLoad() {
    this.showShare();
  },

  /**
   * 展示属性modal
   */
  showModal(ev) {
    this.setData({
      modal: ev.currentTarget.dataset.modal,
      'myModal.isShow': true
    })
  },

  /**
   * 转发
   */
  showShare() {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  linkToHome() {
    wx.switchTab({
      url: '../index/index'
    })
  },

  linkToCart() {
    wx.switchTab({
      url: '../cart/cart'
    })
  }
})
