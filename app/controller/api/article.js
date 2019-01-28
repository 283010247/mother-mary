const { Controller } = require('egg')

// 验证文章
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

class ArticleController extends Controller {
  // 获取所有新闻文章
  async index (ctx) {
    const data = await ctx.model.Article.find({flag: 1})
    ctx.body = data
  }
  // 获取指定文章
  async show (ctx) {
    const {id} = ctx.params
    const data = await ctx.model.Article.findOne({_id: id})
    ctx.body = data
  }
  // 新建文章
  async create (ctx) {
    ctx.validate(createRule, ctx.request.body)
    ctx.body = await ctx.service.article.create(ctx.request.body)
  }
  // 更新文章
  async update (ctx) {
    ctx.validate(createRule, ctx.request.body)
    const {id} = ctx.params
    ctx.body = await ctx.service.article.update(id, ctx.request.body)
  }
  // 删除文章
  async destroy (ctx) {
    const {id} = this.ctx.params
    const data = await ctx.model.Article.deleteOne({_id: id})
    ctx.body = data
  }
}

module.exports = ArticleController