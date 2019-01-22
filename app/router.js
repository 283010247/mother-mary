'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.index.index)
  router.get('/getUploadToken', controller.api.upload.getUploadToken)
  router.get('/delete', controller.api.upload.delete)
  router.post('/upload', controller.api.upload.index)
  // router.resources('banner', '/banner', controller.banner)
}
