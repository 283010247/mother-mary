const { Service } = require('egg')
const qiniu = require('qiniu')

class UploadService extends Service {

  // 获取上传token
  async getUploadToken() {
    const { accessKey, secretKey, bucket } = this.config.qiniu
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    var putPolicy = new qiniu.rs.PutPolicy({
      scope: bucket
    })

    return putPolicy.uploadToken(mac)
  }

  // 删除动作，key要删除的文件名
  delete(key) {
    const { accessKey, secretKey, bucket } = this.config.qiniu
    const config = new qiniu.conf.Config()
    //config.useHttpsDomain = true
    config.zone = qiniu.zone.Zone_z2
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    const bucketManager = new qiniu.rs.BucketManager(mac, config)
    return new Promise((resolve, reject) => {
      bucketManager.delete(bucket, key, (err, respBody, respInfo) => {
        if (err) {
          reject(err)
        } else {
          resolve(respInfo)
        }
      })
    })
  }
}

module.exports = UploadService
