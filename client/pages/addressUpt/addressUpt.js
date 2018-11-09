// miniprogram/pages/addressUpt/addressUpt.js
const app = getApp()
const areaData = require('../../utils/area')

Page({
  data: {
    myModal: {
      isShow: false,
    },
    confirmFlag: false,
    current: 0,
    defaultInfo: {}
  },

  onLoad() {
    this.setData({
      areas: areaData
    })

    if (this.options._id) this.getDefaultData(this.options._id);
  },

  showModal() {
    this.setData({
      'myModal.isShow': true
    })
  },

  // 根据Id获取地址
  getDefaultData(_id) {
    app.store.cloudApi.getAddressList({_id}).then(r => {
      if (r.code === 0) {
        const data = r.data && r.data[0];
        this.setData({
          current: 2,
          defaultInfo: data,
          cityId: data.cityId,
          cityName: data.cityName,
          countryId: data.countryId,
          provinceId: data.provinceId,
          countryName: data.countryName,
          provinceName:  data.provinceName,
        })
      }
    })
  },

  // 省
  getProvinceSelected(e) {
    this.setData({
      cityId: null,
      cityName: null,
      countryId: null,
      countryName: null,
      provinceId: e.currentTarget.dataset.provinceId,
      provinceName: e.currentTarget.dataset.provinceName,
    })
    wx.nextTick(() => {
      this.setData({
        current: 1
      })
    })
  },

  // 市
  getCitySelected(e) {
    this.setData({
      countryId: null,
      countryName: null,
      cityId: e.currentTarget.dataset.cityId,
      cityName: e.currentTarget.dataset.cityName,
    })
    wx.nextTick(() => {
      this.setData({
        current: 2
      })
    })
  },

  // 区、县
  getCountrySelected(e) {
    this.setData({
      countryId: e.currentTarget.dataset.countryId,
      countryName:  e.currentTarget.dataset.countryName
    })
  },

  // 返回
  toBack(ev) {
    this.setData({
      current: ev.target.dataset.current
    })
  },

  // 处理选中的区域
  handleAreaSelect() {
    const {provinceName, cityName, countryName, provinceId, cityId, countryId} = this.data;
    if (provinceName && cityName && countryName) {
      this.setData({
        'defaultInfo.area': `${provinceName}, ${cityName}, ${countryName}`,
        'myModal.isShow': false
      })
    }
  },


  // 提交表单
  formSubmit(e) {
    let params = Object.assign({}, e.detail.value, {
      cityId: this.data.cityId,
      cityName: this.data.cityName,
      countryId: this.data.countryId,
      provinceId: this.data.provinceId,
      countryName: this.data.countryName,
      provinceName: this.data.provinceName
    });
    if (this.options._id) params._id = this.options._id;
    app.store.cloudApi.updateAddress(params).then(r => {
      if (r.code === 0) {
        wx.navigateBack({
          delta: 2
        })
      }
    })
  }
})
