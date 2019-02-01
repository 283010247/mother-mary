const { Controller } = require('egg')

// 验证新建文章
const createRule = {
  title: {
    type: 'string'
  },
  content: {
    type: 'string'
  },
  flag: {
    type: 'enum',
    values: [1, 2]
  }
}

// 验证文章类型
const articleTypeRule = {
  flag: {
    type: 'string',
    values: [1, 2]
  }
}

class ArticleController extends Controller {
  // 获取所有文章，flag=1获取新闻，flag=2获取企业简介
  async index(ctx) {
    ctx.validate(articleTypeRule, ctx.query)
    const { flag } = ctx.query
    let data = await ctx.service.cache.get(`allNews-${flag}`)
    if (!data) {
      data = await ctx.model.Article.find({ flag })
      await ctx.service.cache.set(`allNews-${flag}`, data, 60)
    }
    ctx.body = data
  }
  // 获取指定文章
  async show(ctx) {
    const { id } = ctx.params
    let data = await ctx.service.cache.get(`article-${id}`)
    if (!data) {
      data = await ctx.model.Article.findOne({ _id: id })
      await ctx.service.cache.set(`article-${id}`, data, 60)
    }
    ctx.body = data
  }
  // 新建文章
  async create(ctx) {
    ctx.validate(createRule, ctx.request.body)
    ctx.body = await ctx.service.article.create(ctx.request.body)
  }
  // 更新文章
  async update(ctx) {
    ctx.validate(createRule, ctx.request.body)
    const { id } = ctx.params
    ctx.body = await ctx.service.article.update(id, ctx.request.body)
  }
  // 删除文章
  async destroy(ctx) {
    const { id } = this.ctx.params
    ctx.body = await ctx.service.article.destroy(id)
  }
}

module.exports = ArticleController