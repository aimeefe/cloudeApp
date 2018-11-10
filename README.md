# 项目说明：
[学习，持续] 微信小程序 + 微信小程序云函数： 仿网易严选小程序

[素材来源] 网易严选：如发现不妥请告知删除，谢谢啦！

[微信小程序手册地址] https://developers.weixin.qq.com/miniprogram/dev/


[小程序云开发手册地址] https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html


# 目录结构：
• client - 客户端
  1. components：存放组件
  2. images: 存放图片
  3. jsonData: 存放json，导入到云的集合用
  4. pages: 页面的相关文件
  5. style: 存放独立的wxss样式文件，一些公共的样式可以放在这里
  6. utils: 存放utils文件

• cloud - [云函数]服务端
  1. 主入口： /cloud/router/index.js，使用了tcb-router

#功能模块：

• 首页
  1. banner： UI（√），功能（√）
  
  2. 活动版块： UI（√），功能（×）
  
• 分类：UI（√），功能（√）

• 好评：UI（√），功能（√）

• 购物车：UI（×），功能（×）

• 个人

  1. 订单：：UI（×），功能（×）
  
  2. 积分：：UI（×），功能（×）
  
  3. 优惠券：UI（×），功能（×）
  
  4. 红包：UI（×），功能（×）
  
  5. 地址管理：UI（√），功能（√）
  
  6. 帮助中心：UI（×），功能（×）
  
  7. 个人中心： UI（√），功能（√）
  
• 产品

  1. 详情：UI（√），功能（×）
  
  2. 列表：UI（√），功能（×）

#项目截图：

• 首页 + 活动页

<img src="https://github.com/aimeefe/cloudeApp/blob/master/images/index.jpg" width="375"/>       <img src="https://github.com/aimeefe/cloudeApp/blob/master/images/hd.jpg" width="375"/>    

• 个人中心

<img src="https://github.com/aimeefe/cloudeApp/blob/master/images/my.gif" width="375"/>

#开发环境：

微信web开发者工具

#项目地址：
