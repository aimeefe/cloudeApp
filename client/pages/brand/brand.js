// client/pages/brand/brand.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getBrandList();
  },

  /**
   * 获取banner列表
   */
  getBrandList() {
    app.store.cloudApi.getBrandList({}).then(r => {
      console.log(r);
      this.setData({
        brands: r.data
      })
    })
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
