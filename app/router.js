'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  // 文章
  router.resources('article', '/api/article', controller.api.article)
  // 分类
  router.resources('cate', '/api/cate', controller.api.cate)
  // 商品
  router.resources('goods', '/api/goods', controller.api.goods)
  // 获取上传token
  router.get('/getUploadToken', controller.api.upload.getUploadToken)
  // 删除上传文件
  router.get('/deleteFile', controller.api.upload.delete)
}
