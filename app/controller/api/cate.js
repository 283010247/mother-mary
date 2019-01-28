const { Controller } = require('egg')

// 验证分类
const createRule = {
  name: {
    type: 'string'
  },
  sort: {
    type: 'number'
  }
}
class CateController extends Controller {
  // 获取所有分类
  async index(ctx) {
    const data = await ctx.model.Cate.find()
    ctx.body = data
  }
  // 获取指定分类
  async show(ctx) {
    const { id } = ctx.params
    const data = await ctx.model.Cate.findOne({ _id: id })
    ctx.body = data
  }
  // 新建分类
  async create(ctx) {
    ctx.validate(createRule, ctx.request.body)
    ctx.body = await ctx.service.cate.create(ctx.request.body)
  }
  // 更新分类
  async update(ctx) {
    ctx.validate(createRule, ctx.request.body)
    const { id } = ctx.params
    ctx.body = await ctx.service.cate.update(id, ctx.request.body)
  }
  // 删除分类
  async destroy(ctx) {
    const { id } = this.ctx.params
    ctx.body = await ctx.service.cate.destroy(id)
  }
}

module.exports = CateController