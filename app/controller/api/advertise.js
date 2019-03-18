const {Controller} = require('egg')

// 验证广告
const createRule = {
  title: {// 广告标题
    type: 'string'
  },
  content: {// 广告内容
    type: 'string'
  },
  imgs: {// 广告图集
    type: 'array'
  },
  flag: {// 广告标识，1-移动端轮播图，2-pc端轮播图
    type: 'enum',
    values: [1, 2]
  }
}

class AdvertiseController extends Controller {
  // 获取所有广告
  async index(ctx) {
    const { currentPage = 1, pageSize = 10 } = ctx.request.body
    const data = await ctx.model.Advertise.find({}, { '__v': 0 }).skip((currentPage - 1) * pageSize).limit(pageSize)
    ctx.body = data
  }
  // 获取指定广告
  async show(ctx) {
    const { id } = ctx.params
    const data = await ctx.model.Advertise.findOne({ _id: id })
    ctx.body = data
  }
  // 新建广告
  async create(ctx) {
    ctx.validate(createRule, ctx.request.body)
    ctx.body = await ctx.service.advertise.create(ctx.request.body)
  }
  // 更新广告
  async update(ctx) {
    ctx.validate(createRule, ctx.request.body)
    const { id } = ctx.params
    ctx.body = await ctx.service.advertise.update(id, ctx.request.body)
  }
  // 删除广告
  async destroy(ctx) {
    const { id } = this.ctx.params
    ctx.body = await ctx.service.advertise.destroy(id)
  }
}

module.exports = AdvertiseController