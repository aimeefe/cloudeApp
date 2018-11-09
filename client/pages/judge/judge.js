//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    judges: [],
  },

  onLoad() {
    this.getJudge();
  },

  // 评价
  getJudge() {
    app.store.cloudApi.getJudge({}).then(r => {
      this.setData({
        judges: r.data
      })
    })
  },
})
