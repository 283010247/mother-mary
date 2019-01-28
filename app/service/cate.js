const { Service } = require('egg')

class CateService extends Service {
  // 获取所有分类
  async index() {
    const query = this.ctx.query
    this.ctx.body = query
  }
  // 获取指定分类
  async show() {
    const query = this.ctx.params
    this.ctx.body = query
  }
  // 新建分类
  async create(body) {
    try {
      await this.ctx.model.Cate.create(body)
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
  // 更新分类
  async update(id, body) {
    try {
      await this.ctx.model.Cate.update({ _id: id }, {...body, updated_at: Date()})
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
  // 删除分类
  async destroy(id) {
    try {
      await this.ctx.model.Cate.deleteOne({ _id: id })
      return { msg: 'success', code: 0 }
    } catch (error) {
      return { msg: error, code: 1 }
    }
  }
}

module.exports = CateService