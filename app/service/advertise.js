const { Service } = require('egg')

class AdvertiseService extends Service {
  // 新建文章
  async create(body) {
    try {
      await this.ctx.model.Advertise.create(body)
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
  // 更新文章
  async update(id, body) {
    try {
      await this.ctx.model.Advertise.updateOne({ _id: id }, body)
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
  // 删除文章
  async destroy(id) {
    try {
      await this.ctx.model.Advertise.deleteOne({ _id: id })
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
}

module.exports = AdvertiseService