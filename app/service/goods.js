const { Service } = require('egg')

class GoodsService extends Service {
  // 新建商品
  async create(body) {
    try {
      await this.ctx.model.Goods.create(body)
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
  // 更新商品
  async update(id, body) {
    try {
      await this.ctx.model.Goods.updateOne({ _id: id }, body)
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
  // 删除商品
  async destroy(id) {
    try {
      await this.ctx.model.Goods.deleteOne({ _id: id })
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
}

module.exports = GoodsService