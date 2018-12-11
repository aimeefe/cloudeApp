const cloud = require('wx-server-sdk');
const TcbRouter = require('tcb-router');

cloud.init();
const db = cloud.database();


/**
 * 查询处理
 * @param  {[type]} sheet      [数据表名称]
 * @param  {Object} [limit={}] [查询条件]
 */
const toGet = (sheet, limit = {}) => {
  try {
    return db.collection(sheet).where(limit.where).get();
  } catch (e) {
    console.error(e);
  }
}

/**
 * 新增处理
 * @param  {[type]} sheet  [数据表名称]
 * @param  {[type]} params [参数]
 */
const toAdd = (sheet, params) => {
  try {
    return db.collection(sheet).add({
      data: params
    });
  } catch (e) {
    console.error(e);
  }
}

/**
 * 编辑处理
 * @param  {[type]} sheet      [数据表名称]
 * @param  {[type]} params     [参数]
 * @param  {Object} [limit={}] [条件]
 */
const toEdit = (sheet, params, limit = {}) => {
  delete params._id;
  try {
    return db.collection(sheet).where(limit.where).update({
      data: params
    });
  } catch (e) {
    console.error(e);
  }
}

/**
 * 删除处理
 * @param  {[type]} sheet      [数据表名称]
 * @param  {[type]} params     [参数]
 * @param  {Object} [limit={}] [条件]
 */
const toDelete = (sheet, params, limit = {}) => {
  try {
    return db.collection(sheet).where(limit.where).remove();
  } catch (e) {
    console.error(e);
  }
}


// 返回值处理
const toReturn = (ctx) => {
  return {
    code: 0,
    message: 'success',
    data: ctx.data.data
  }
}

exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  });

  // app.use 表示该中间件会适用于所有的路由
  app.use(async (ctx, next) => {
    ctx.data = {};
    await next();
  });

  /********************************** 首页  *********************************/

  // 获取banner
  app.router('banner', async (ctx, next) => {
    ctx.data = await toGet('banner');
    ctx.body = await toReturn(ctx);
    await next();
  });


  /********************************** 分类  *********************************/

  // 获取分类
  app.router('category', async (ctx, next) => {
    ctx.data = await toGet('category');
    ctx.body = await toReturn(ctx);
    await next();
  });


  /********************************* 地址  **********************************/

  // 获取地址列表
  app.router('address/list', async (ctx, next) => {
    let limit = event.params._id ? {
      where: {
        _id: event.params._id
      }
    } : {};
    ctx.data = await toGet('address', limit);
    ctx.body = await toReturn(ctx);
    await next();
  });

  // 更新地址
  app.router('address/update', async (ctx, next) => {
    const params = event.params;
    if (params._id) {
      ctx.data = await toEdit('address', params, {
        where: {
          _id: params._id
        }
      });
    } else {
      ctx.data = await toAdd('address', params);
    }
    ctx.body = await toReturn(ctx);
    await next();
  });

  // 删除地址
  app.router('address/delete', async (ctx, next) => {
    const params = event.params;
    ctx.data = await toDelete('address', params, {
      where: {
        _id: params._id
      }
    });
    ctx.body = await toReturn(ctx);
    await next();
  });


  /********************************** 评价 **********************************/

  // 评价列表
  app.router('judge', async (ctx, next) => {
    ctx.data = await toGet('judge');
    ctx.body = await toReturn(ctx);
    await next();
  });


  /********************************** 品牌 **********************************/

  // 品牌列表
  app.router('brand/list', async (ctx, next) => {
    ctx.data = await toGet('brand');
    ctx.body = await toReturn(ctx);
    await next();
  });


  /********************************** 产品 **********************************/

  // 产品列表
  app.router('product', async (ctx, next) => {
    ctx.data = await toGet('product');
    ctx.body = await toReturn(ctx);
    await next();
  });

  // 产品详情
  app.router('product/detail', async (ctx, next) => {
    let limit = event.params.id ? {
      where: {
        "id": parseInt(event.params.id)
      }
    } : {};
    ctx.data = await toGet('product_detail', limit);
    ctx.body = await toReturn(ctx);
    await next();
  });



  return app.serve();
}
