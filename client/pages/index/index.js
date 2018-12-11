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
      imgUrls: [],
      categoriesType1: [],
      categoriesType2: []
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
    this.getCategory();
  },

  /**
   * 获取banner列表
   */
  getBannerList() {
    app.store.cloudApi.getBanner({}).then(r => {
      if (r.code === 0) {
        this.setData({
          "bannerProps.imgUrls": r.data
        })
      }
    })
  },


  /**
   * 获取品牌列表
   */
  getBrandList() {
    app.store.cloudApi.getBrandList({}).then(r => {
      if (r.code === 0) {
        this.setData({
          brands: r.data && r.data.length ? r.data.slice(0, 4) : []
        })
      }
    })
  },


  /**
   * 获取推荐列表
   */
  getRecommendList() {
    app.store.cloudApi.getRecommendProduct({}).then(r => {
      if (r.code === 0) {
        this.setData({
          recommends: r.data,
          hotType01: r.data[0],
          hotType02: r.data.slice(2, 5)
        })
      }
    })
  },


  /**
   * 获取分类推荐
   */
  getCategory() {
    app.store.cloudApi.getCategory({}).then(r => {
      if (r.code === 0) {
        this.setData({
          categoriesType1: r.data && r.data.length ? r.data.slice(4, 6) : [],
          categoriesType2: r.data && r.data.length ? r.data.slice(6) : [],
        })
      }
    })
  },

  /**
   * 根据分类跳转到产品列表
   */
  linkToProList(e) {
    wx.navigateTo({
      url: `/pages/pro_list/pro_list?categoryId=${e.currentTarget.dataset.categoryId}`
    })
  },

  linkToProDetail(e) {
    wx.navigateTo({
      url: `../pro_detail/pro_detail?id=${e.currentTarget.dataset.id}`
    })
  }
})
