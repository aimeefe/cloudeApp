// client/pages/hd_rmd/hd_rmd.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommends: [],
    current: 0,
    navs: [{
      id: 0,
      value: '编辑推荐'
    }, {
      id: 1,
      value: '24小时热销'
    }, {
      id: 2,
      value: '人气周榜'
    }, {
      id: 3,
      value: '热销总榜'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getRecommendList();
  },

  /**
   * 获取推荐列表
   */
  getRecommendList() {
    app.store.cloudApi.getRecommendProduct({}).then(r => {
      this.setData({
        recommends: r.data
      })
    })
  },

  /**
   * 监测swiper滑动
   */
  handleSwiper(e) {
    this.setData({
      current: e.detail.current
    })
  },

  /**
   * 点击菜单切换产品列表
   */
  changeItemById(e) {
    this.setData({
      current: e.currentTarget.dataset.id
    })
  }
})
