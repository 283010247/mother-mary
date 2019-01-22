const { Service } = require('egg')
const qiniu = require('qiniu')

class UploadService extends Service {
  /*
   * 七牛上传
   * @param {Stream} readableStream 流
   * @param {String} key 文件名key
   * @param {Function} callback 回调函数
   */
  index(readableStream, key) {
    const { accessKey, secretKey, bucket } = this.config.qiniu

    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    const putPolicy = new qiniu.rs.PutPolicy({ scope: bucket })
    const uploadToken = putPolicy.uploadToken(mac)

    const config = new qiniu.conf.Config()
    const formUploader = new qiniu.form_up.FormUploader(config)
    const putExtra = new qiniu.form_up.PutExtra()

    return new Promise(function(resolve, reject) {
      formUploader.putStream(
        uploadToken,
        key,
        readableStream,
        putExtra,
        function(respErr, respBody, respInfo) {
          if (respErr) {
            reject(respErr)
            return
          }
          if (respInfo.statusCode === 200) {
            resolve(respBody)
          } else {
            reject(new Error('上传失败:statusCode !== 200'))
          }
        }
      )
    })
  }
}

module.exports = UploadService
