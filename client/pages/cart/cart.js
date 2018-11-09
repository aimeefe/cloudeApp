//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    recommend: {
      list: []
    }
  },

  onLoad() {
    this.getRecommendProduct();
  },

  // 推荐
  getRecommendProduct() {
    app.store.cloudApi.getRecommendProduct({}).then(r => {
      this.setData({
        recommend: {
          list: r.data
        }
      })
    })
  }
})
