function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}

function json2url(json) {
  let arr = [],
    str = '';
  Object.keys(json).forEach((key) => {
    if ((typeof json[key]) === 'object') json[key] = JSON.stringify(json[key]); // 这里必须使用内置JSON对象转换
  })
  for (var i in json) {
    str = i + '=' + json[i];
    arr.push(str);
  }
  return arr.join('&');
}

function request(url, params, method = 'POST', isAbort = false) {
  let data = '',
    geturl;

  if (method === 'POST') {
    data = json2Form(params);
    geturl = url;
  }
  if (method === 'GET') {
    const query = json2url(params); //对象拼接成字符串
    geturl = query ? (url + '?' + query) : url; //若传参data为空的话，就不拼接，不为空，则拼接url
  }

  return new Promise(resolve => {
    const requestTask = wx.request({
      url: geturl,
      data: data,
      header: {
        'Content-type': 'application/x-www-form-urlencoded', // application/json 默认值
        'devType': 16
      },
      method: method,
      dataType: 'json',
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        console.log(err)
      }
    })

    if (isAbort) {
      requestTask.abort() // 取消请求任务
    }
  })
}

const url = 'https://test/api/v1/';


/*********************************************** 主页 **************************************************/

// 获取banner列表
const getBanner = (params) => {
  return request(`${url}getBanner`, params, 'GET');
};

// 获取限时特价产品列表
const getLimitProduct = (params) => {
  return request(`${url}getLimitProduct`, params, 'GET');
}

// 获取限时特价产品列表
const getSpecialProduct = (params) => {
  return request(`${url}getSpecialProduct`, params, 'GET');
}

// 获取限时特价产品列表
const getRecommendProduct = (params) => {
  return request(`${url}getRecommendProduct`, params, 'GET');
}


/*********************************************** 分类 **************************************************/

// 获取一级分类
const getCategory = (params) => {
  return request(`${url}getCategory`, params, 'GET');
}


module.exports = {
  getBanner,
  getLimitProduct,
  getSpecialProduct,
  getRecommendProduct,
  getCategory
}
