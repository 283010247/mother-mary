const { Controller } = require('egg')

// 验证广告
const createRule = {
  title: {
    type: 'string'
  },
  content: {
    type: 'string'
  },
  imgs: {
    type: 'array'
  },
  flag: {
    type: 'enum',
    values: [1, 2]
  }
}

class AdvertiseController extends Controller {
  // 获取所有广告
  async index(ctx) {
    let data = await ctx.service.cache.get('allAds')
    if (!data) {
      data = await ctx.model.Advertise.find()
      // 缓存一天
      await ctx.service.cache.set('allAds', data, 60 * 60 * 24)
    }
    ctx.body = data
  }
  // 获取指定广告
  async show(ctx) {
    const { id } = ctx.params
    let data = await ctx.service.cache.get(`ads-${id}`)
    if (!data) {
      data = await ctx.model.Advertise.findOne({ _id: id })
      // 缓存一天
      await ctx.service.cache.set(`ads-${id}`, data, 60 * 60 * 24)
    }
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