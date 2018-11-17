# 项目说明：
[学习，持续] 微信小程序 + 微信小程序云函数： 仿网易严选小程序

[素材来源] 网易严选：如发现不妥请告知删除，谢谢啦！

# 使用：
云函数需要安装依赖

cd cloudeApp/cloud/router/

npm install

# 目录结构：
• client - 客户端

  【components】存放组件
  
  【images】存放图片
  
  【jsonData】临时存放json结构，导入到云的集合用
  
  【pages】页面的相关文件
  
  【utils】存放utils文件

• cloud - [云函数]服务端

 【主入口】 /cloud/router/index.js，
  使用了tcb-router

#功能模块：

• 首页

 【banner】 UI（√），功能（√）
  
 【热门推荐】 UI（√），功能（×）
 
 【限时抢购】 UI（√），功能（×）
 
 【品牌】 UI（√），功能（√）
  
 【热门分类】 UI（√），功能（×）
 
  
• 分类：UI（√），功能（√）

• 好评：UI（√），功能（√）

• 购物车：UI（×），功能（×）

• 个人

  【订单】UI（×），功能（×）
  
  【积分】UI（√），功能（×）
  
  【优惠券】UI（×），功能（×）
  
  【红包】UI（×），功能（×）
  
  【地址管理】UI（√），功能（√）
  
  【帮助中心】UI（×），功能（×）
  
  【个人中心】 UI（√），功能（√）
  
• 产品

  【详情】UI（√），功能（×）
  
  【列表】UI（√），功能（×）

#项目截图：

• 首页 

<img src="https://github.com/aimeefe/cloudeApp/blob/master/images/index.gif" width="375"/>       

• 热门推荐

<img src="https://github.com/aimeefe/cloudeApp/blob/master/images/hot.gif" width="375"/>    

• 个人中心 

<img src="https://github.com/aimeefe/cloudeApp/blob/master/images/my.gif" width="375"/>         

• 分类页

<img src="https://github.com/aimeefe/cloudeApp/blob/master/images/category.gif" width="375"/>

• 产品详情

<img src="https://github.com/aimeefe/cloudeApp/blob/master/images/detail.gif" width="375"/>        

• 评价页

<img src="https://github.com/aimeefe/cloudeApp/blob/master/images/pj.gif" width="375"/>

#开发环境：

微信web开发者工具

#项目地址：
