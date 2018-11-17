// client/pages/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerProps: {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      circular: true,
      imgUrls: []
    },
    recommends: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getBannerList();
    this.getRecommendList();
    this.getBrandList();
  },

  /**
   * 获取banner列表
   */
  getBannerList() {
    app.store.cloudApi.getBanner({}).then(r => {
      this.setData({
        "bannerProps.imgUrls": r.data
      })
    })
  },


  /**
   * 获取品牌列表
   */
  getBrandList() {
    app.store.cloudApi.getBrandList({}).then(r => {
      console.log(r);
      this.setData({
        brands: r.data && r.data.length ? r.data.slice(0, 4) : []
      })
    })
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
})
