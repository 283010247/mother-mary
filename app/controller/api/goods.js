const { Controller } = require('egg')

class GoodsController extends Controller {
  // 获取所有商品
  async index(ctx) {
    const data = await ctx.model.Goods.find({ flag: 1 })
    ctx.body = data
  }
  // 获取指定商品
  async show(ctx) {
    const { id } = ctx.params
    const data = await ctx.model.Goods.findOne({ _id: id })
    ctx.body = data
  }
  // 新建商品
  async create(ctx) {
    ctx.validate(createRule, ctx.request.body)
    ctx.body = await ctx.service.goods.create(ctx.request.body)
  }
  // 更新商品
  async update(ctx) {
    ctx.validate(createRule, ctx.request.body)
    const { id } = ctx.params
    ctx.body = await ctx.service.goods.update(id, ctx.request.body)
  }
  // 删除商品
  async destroy(ctx) {
    const { id } = this.ctx.params
    ctx.body = await ctx.service.goods.destroy(id)
  }
}

module.exports = GoodsController