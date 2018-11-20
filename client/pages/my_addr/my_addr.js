// miniprogram/pages/address/address.js
const app = getApp()

Page({

  data: {
    x: null,
    current: null,
    address: [],
    isOpen: false,
    defaultX: null
  },

  onLoad() {
    this.getAddressList();
  },

  onShow() {
    this.getAddressList();
  },

  getAddressList() {
    app.store.cloudApi.getAddressList({}).then(r => {
      if (r.code === 0) {
        this.setData({
          address: r.data
        })
      }
    })
  },

  /**
   * 重置非当前滑动项的x值
   */
  resetBeforeRowX(e) {
    let {current, address} = this.data;
    const index = e.currentTarget.dataset.index;
    const defaultX = e.changedTouches[0].pageX;  //滑动的初始值（最右侧的时候）

    if (current === index) return;
    (current || current === 0) && current !== index && (address[current].x = 0);
    wx.nextTick(() => {
      this.setData({
        current: index,
        address: address,
        defaultX: defaultX
      })
    })
  },

  /**
   * end处理
   */
  handleTouchEnd(e) {
    const {defaultX, address} = this.data;         //defaultX：开始滑动，在最右侧时候的值
    const moveX = e.changedTouches[0].pageX;       //moveX：已经向左侧滑动时的值
    const currentMoveX = defaultX - moveX;         //currentMoveX：已经滑动了的差值
    const index = e.currentTarget.dataset.index;

    address[index].x = currentMoveX < 50 ? 0 : -140;
    wx.nextTick(() => {
      this.setData({
        address: address
      })
    })
  },

  /**
   * 删除
   */
  handleDelete(e) {
    let address = this.data.address;
    const index = e.currentTarget.dataset.index;

    wx.showLoading({title: 'loading...'});
    app.store.cloudApi.deleteAddress({_id: this.data.address[index]._id}).then(r => {
      if (r.code === 0) {
        address.splice(index, 1);
        this.setData({
          address: address
        })
        wx.hideLoading();
        wx.showToast({title: '成功', icon: 'success', duration: 2000});
      }
    })
  }
})
