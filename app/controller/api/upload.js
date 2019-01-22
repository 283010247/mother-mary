const { Controller } = require('egg')
const sendToWormhole = require('stream-wormhole')
const path = require('path')
const qiniu = require('qiniu')

class Upload extends Controller {
  /**
   * 上传
   */
  async index() {
    const { ctx, config, service } = this
    const stream = await ctx.getFileStream()
    const filename = path.extname(stream.filename).toLowerCase()
    try {
      const result = await service.Upload.index(stream, filename)
      ctx.body = {
        success: true,
        url: config.qiniu.origin + '/' + result.key
      }
    } catch (err) {
      await sendToWormhole(stream)
      throw err
    }
  }

  async getUploadToken() {
    const { accessKey, secretKey, bucket } = this.config.qiniu
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    var putPolicy = new qiniu.rs.PutPolicy({
      scope: bucket
    })

    var uploadToken = putPolicy.uploadToken(mac)
    this.ctx.body = uploadToken
  }

  async delete() {
    const { accessKey, secretKey, bucket } = this.config.qiniu
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    var config = new qiniu.conf.Config()
    //config.useHttpsDomain = true;
    config.zone = qiniu.zone.Zone_z2
    var bucketManager = new qiniu.rs.BucketManager(mac, config)
    var key = 'FhlctRCzsVNRHGl78Jq8QJlchzgr.jpeg'

    const data = await bucketManager.delete(bucket, key, (err, respBody, respInfo) => {
      if (err) {
        this.ctx.body = err
      } else {
        this.ctx.body = respInfo
      }
    })
  }
}

module.exports = Upload
