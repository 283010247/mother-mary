const { Controller } = require('egg')

// 商品验证
const createRule = {
  name: {
    type: 'string'
  },
  describe: {
    type: 'string'
  },
  detail: {
    type: 'string'
  },
  _cate: {
    type: 'string'
  },
  imgs: {
    type: 'array'
  }
}

class GoodsController extends Controller {
  // 获取所有商品
  async index(ctx) {
    const { currentPage = 1, pageSize = 10 } = ctx.request.body
    const data = await ctx.model.Goods.find({}, { '__v': 0 }).populate('_cate', {'__v': 0}).skip((currentPage - 1) * pageSize).limit(pageSize)
    ctx.body = data
  }
  // 获取指定商品
  async show(ctx) {
    const { id } = ctx.params
    const data = await ctx.model.Goods.findOne({ _id: id }).populate('_cate')
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