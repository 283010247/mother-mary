const { Service } = require('egg')

class AdvertiseService extends Service {
  // 新建广告
  async create(body) {
    try {
      await this.ctx.model.Advertise.create(body)
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
  // 更新广告
  async update(id, body) {
    try {
      // 更新数据库库
      await this.ctx.model.Advertise.updateOne({ _id: id }, body)
      const singleAds = await this.ctx.model.Advertise.findOne({ _id: id })
      // 更新单个广告缓存
      await this.ctx.service.cache.set(`ads-${id}`, singleAds, 60 * 60 * 24)
      // 更新所有广告缓存
      const allAds = await this.ctx.service.cache.get(`allAds`)
      for (let i = 0; i < allAds.length; i++) {
        if (allAds[i]._id == singleAds._id) {
          allAds[i] = singleAds
        }
      }
      await this.ctx.service.cache.set(`allAds`, allAds, 60 * 60 * 24)
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
  // 删除广告
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