//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navs: [],
    products: [],
    scrollLeft: 100,
    categoryId: null,
    subCategoryId: null
  },

  onLoad() {
    this.setData({
      scrollLeft: 100,
      categoryId: this.options.categoryId,
      subCategoryId: this.options.subCategoryId
    })
    this.getSubCategory();
    this.getProduct();
  },

  /***************************** 获取数据 *****************************/

  // 获取主品类下的二级分类
  getSubCategory() {
    app.store.cloudApi.getCategory({categoryId: this.options.categoryId}).then(r => {
      this.setData({
        navs: r.data[0].children || [],
      })
    })
  },

  // 获取产品
  getProduct() {
    app.store.cloudApi.getLimitProduct({}).then(r => {
      this.setData({
        products: {
          list: r.data
        }
      })
    })
    this.setCurrentPosition();
  },

  //动画
  setCurrentPosition() {
    wx.createIntersectionObserver().relativeToViewport({left: 0}).observe('.menu-item-current', (res) => {
      console.log(res.intersectionRect.left );
    })
  },

  //跳转到详情
  linkToDetail() {
    wx.navigateTo({
      url: '/pages/prodetail/prodetail'
    })
  }
})
