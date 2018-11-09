//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    fixed: false,
    current: 0,
    menuTop: null,
    topArr: null,
    product: {
      list: []
    },
    menus: [{
      value: 'voucher',
      title: '领券中心',
    }, {
      value: 'special',
      title: '特价商品',
    }, {
      value: 'good',
      title: '好物优选',
    }, {
      value: 'hot',
      title: '人气推荐',
    }, {
      value: 'new',
      title: '新品首发',
    }]
  },
  onLoad() {
    this.getProduct();
    this.handleMenuFixed();
    if (this.options.index) this.getCurrentItemDefault(this.options.index);
  },

  /****************************** 获取数据 ******************************/

  // 产品列表
  getProduct() {
    app.store.cloudApi.getSpecialProduct({}).then(r => {
      this.setData({
        product: {
          list: r.data
        }
      })
    })
  },

  getCurrentItem(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    })
    if (!this.data.topArr) return this.getTopBySection(0, index);
    wx.pageScrollTo({
      scrollTop: this.data.topArr[index],
      duration: 0
    })
  },

  getCurrentItemDefault(index) {
    this.setData({
      current: index
    })
    if (!this.data.topArr) return this.getTopBySection(0, index);
    wx.pageScrollTo({
      scrollTop: this.data.topArr[index],
      duration: 0
    })
  },

  //获取到模块到顶部的距离
  getTopBySection(scrollTop = 0, index = 0) {
    const tops = this.data.topArr;
    if (tops) {
      const index = this.data.current;
      scrollTop > tops[index + 1] && (this.data.current++);
      index > 0 && scrollTop < tops[index] && (this.data.current--);
      if (index === this.data.current) return;
      this.setData({
        current: this.data.current
      })
    } else {
      wx.createSelectorQuery().selectAll('.box').boundingClientRect(res => {
        const r = res.reduce((acc, val) => acc.concat(parseInt([val.top - 80/app.store.sizeRate])), []);
        this.setData({
          topArr: r
        })
        wx.pageScrollTo({
          scrollTop: r[index],
          duration: 0
        })
      }).exec();
    }
  },

  onPageScroll(ev) {
    const scrollTop = ev.scrollTop;
    this.getTopBySection(scrollTop);
  },

  // 菜单吸顶
  handleMenuFixed() {
    wx.createIntersectionObserver().relativeToViewport().observe('.banner', res => {
      this.setData({
        fixed: !res.intersectionRatio
      })
    })
  }
})
