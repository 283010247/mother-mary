'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  // 首页
  router.get('/', controller.pc.index)
  // 后台管理
  router.get('/admin', controller.admin.index)
  // 移动端
  router.get('/mobile', controller.mobile.index)
  // 文章
  router.resources('article', '/api/article', controller.api.article)
  // 分类
  router.resources('cate', '/api/cate', controller.api.cate)
  // 商品
  router.resources('goods', '/api/goods', controller.api.goods)
  // 广告
  router.resources('advertise', '/api/advertise', controller.api.advertise)
  // 获取上传token
  router.get('/getUploadToken', controller.api.upload.getUploadToken)
  // 删除上传文件
  router.get('/deleteFile', controller.api.upload.delete)
}
