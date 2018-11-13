// miniprogram/pages/address/address.js
const app = getApp()

Page({

  data: {
    address: []
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
  }
})
