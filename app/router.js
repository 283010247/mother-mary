'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.resources('article', '/api/article', controller.api.article)
  router.get('/getUploadToken', controller.api.upload.getUploadToken)
  router.get('/delete', controller.api.upload.delete)
}
