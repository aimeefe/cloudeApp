//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navs: [],
    toTop: null,
    categoryIndex: 0
  },

  onLoad() {
    this.getCategory();
  },

  //获取当前菜单
  changeCurrent(e) {
    this.setData({
      toTop: 0,
      categoryIndex: e.currentTarget.dataset.index
    })
  },

  //跳转到列表页
  linkToListPage(e) {
    const {categoryId, subCategoryId} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/prolist/prolist?categoryId=${categoryId}&subCategoryId=${subCategoryId}`
    })
  },

  /**
   * 获取一级分类
   */
  getCategory() {
    app.store.cloudApi.getCategory({}).then(r => {
      this.setData({
        navs: r.data,
      })
    })
  },

  // 禁止滑动
  stopTouchMove() {
    return false;
  }
})
