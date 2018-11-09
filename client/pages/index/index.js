//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banners: [],
    pieces: [{
        id: 1,
        pic: 'http://yanxuan.nosdn.127.net/aa68d160af714a4df687227bbdf89768.png',
        count: 3,
        priceNow: 18,
        priceHistory: 30
      },
      {
        id: 2,
        pic: 'http://yanxuan.nosdn.127.net/a10ed5c19533c9e1e2abf1d8cb843c24.png',
        count: 4,
        priceNow: 18,
        priceHistory: 30
      },
      {
        id: 3,
        pic: 'http://yanxuan.nosdn.127.net/643336446d25ccdb23a60e8f498fb2a4.png',
        count: 3,
        priceNow: 18,
        priceHistory: 30
      }, {
        id: 4,
        pic: 'http://yanxuan.nosdn.127.net/22d1477f261d940e6f2242e4f0c402b0.png',
        count: 3,
        priceNow: 18,
        priceHistory: 30
      }
    ],
    special: {
      list: []
    },
    recommend: {
      list: []
    },
    limit: {
      list: []
    }
  },
  onLoad() {
    this.showShare();
    this.getBanner();
    this.getLimitProduct();
    this.getSpecialProduct();
    this.getRecommendProduct();
  },

  /****************************** 获取数据 ******************************/

  // banner
  getBanner() {
    app.store.cloudApi.getBanner({}).then(r => {
      if (r.code === 0) {
        this.setData({
          banners: r.data
        })
      }
    })
  },

  // 限时特价列表
  getLimitProduct() {
    app.store.cloudApi.getLimitProduct({}).then(r => {
      if (r.code === 0) {
        this.setData({
          limit: {
            list: r.data
          }
        })
      }
    })
  },

  // 特价
  getSpecialProduct() {
    app.store.cloudApi.getSpecialProduct({}).then(r => {
      if (r.code === 0) {
        this.setData({
          special: {
            list: r.data
          }
        })
      }
    })
  },

  // 推荐
  getRecommendProduct() {
    app.store.cloudApi.getRecommendProduct({}).then(r => {
      if (r.code === 0) {
        this.setData({
          recommend: {
            list: r.data
          }
        })
      }
    })
  },

  // 转发
  showShare() {
    wx.showShareMenu({
      title: 'wwww',
      withShareTicket: true,
    })
  }
})
