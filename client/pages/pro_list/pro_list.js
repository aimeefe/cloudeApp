
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommends: [],
    current: 0,
    navs: [],
    subCategoryId: null
  },

  onLoad() {
    this.getNavs();
    this.getRecommendList();
  },

  /**
   * 获取菜单
   */
  getNavs() {
    const {categoryId, subCategoryId} = this.options;
    app.store.cloudApi.getCategory({}).then(r => {
      if (r.code === 0) {
        let data = r.data.filter(i => (categoryId == i.id))[0];
        this.setData({
          navs: data,
          current: subCategoryId || data.subCateList[0].children[0].id
        })
      }
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

  /**
   * 监测swiper滑动
   */
  handleSwiper(e) {
    this.setData({
      current: e.detail.currentItemId
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
