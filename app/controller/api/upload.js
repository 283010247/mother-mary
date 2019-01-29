const { Controller } = require('egg')

class UploadController extends Controller {
  // 获取上传token
  async getUploadToken(ctx) {
    const {origin} = this.config.qiniu
    const token = await this.service.upload.getUploadToken()
    const data = {code: 0, msg: 'success', data: {token, origin}}
    ctx.body = data
  }
  // 删除文件
  async delete() {
    // 文件名
    var key = 'Fn1UWC8y2Uvqg6JjUBg2cv2G4A_W'
    const data = await this.service.upload.delete(key)
    this.ctx.body = data
  }
}

module.exports = UploadController
