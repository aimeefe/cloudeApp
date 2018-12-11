// 请求
const request = (url, params) => {
  return new Promise(resolve => {
    wx.cloud.callFunction({

      // 要调用的云函数名称
      name: 'router',

      // 传递给云函数的参数
      data: {
        $url: url,
        params
      },
      success: res => {
        resolve(res.result);
      },
      fail: err => {
        console.log([url] + err);
      }
    })
  })
};

/*********************************************** 首页 **************************************************/

// 获取banner列表
const getBanner = (params) => {
  return request('banner', params);
};

// 获取限时特价产品列表
const getLimitProduct = (params) => {
  return request('product', params);
}

// 获取特价产品列表
const getSpecialProduct = (params) => {
  return request('product', params);
}

// 获取推荐产品列表
const getRecommendProduct = (params) => {
  return request('product', params);
}


/*********************************************** 分类 **************************************************/

// 获取一级分类
const getCategory = (params) => {
  return request('category', params);
}

/*********************************************** 评价 **************************************************/

// 评价
const getJudge = (params) => {
  return request('judge', params);
}

/*********************************************** 地址 **************************************************/

// 更新地址
const updateAddress = (params) => {
  return request('address/update', params);
}

// 获取地址列表
const getAddressList = (params) => {
  return request('address/list', params);
}

const deleteAddress = (params) => {
  return request('address/delete', params);
}

/*********************************************** 品牌 **************************************************/

// 获取品牌列表
const getBrandList = (params) => {
  return request('brand/list', params);
}


/*********************************************** 产品 **************************************************/

// 获取产品详情
const getProductDetail = (params) => {
  return request('product/detail', params);
}


module.exports = {
  getBanner,
  getLimitProduct,
  getSpecialProduct,
  getRecommendProduct,
  getCategory,
  getJudge,
  updateAddress,
  getAddressList,
  getBrandList,
  deleteAddress,
  getProductDetail
}
