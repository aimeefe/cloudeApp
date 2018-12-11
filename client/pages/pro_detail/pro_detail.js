//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    modal: null,
    myModal: {
      isShow: false,
    },
    detail: {},
    attrs: {},
    service: [{
      "title": "不支持30天无忧退换货",
      "content": "食品、贴身衣物、积分兑换等特殊商品，无质量问题不支持退换货。"
    }, {
      "title": "48小时快速退款",
      "content": "收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账。"
    }, {
      "title": "满88元免邮费",
      "content": "单笔订单金额（不含运费），大陆地区满88元免邮，不满88元收取10元邮费；港澳台地区满500元免邮，不满500元收取30元运费；海外地区以下单页提示运费为准。"
    }, {
      "title": "网易自营品牌",
      "content": "网易原创生活类电商品牌，所有商品均为网易自营，品质保证。"
    },{
      "title": "国内部分地区无法配送",
      "content": "不支持省份：新疆, 台湾, 香港, 澳门"
    }]
  },

  onLoad() {
    this.showShare();
    this.getProductDetail();
  },

  /**
   * 展示属性modal
   */
  showModal(ev) {
    this.setData({
      modal: ev.currentTarget.dataset.modal,
      'myModal.isShow': true
    })
  },

  /**
   * 转发
   */
  showShare() {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  linkToHome() {
    wx.switchTab({
      url: '../index/index'
    })
  },

  linkToCart() {
    wx.switchTab({
      url: '../cart/cart'
    })
  },

  /**
   * 获取详情数据
   */
  getProductDetail() {
    app.store.cloudApi.getProductDetail({
      id: this.options.id
    }).then(r => {
      if (r.code === 0) {
        const {name, skuSpecList, retailPrice, listPicUrl} = r.data[0];
        console.log({name, skuSpecList, retailPrice, listPicUrl});
        this.setData({
          detail: r.data[0],
          attrs: {
            name,
            skuSpecList,
            retailPrice,
            listPicUrl
          }
        })
      }
    })
  },
})
