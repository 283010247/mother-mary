const { Controller } = require('egg')

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
  // 获取所有文章
  async index () {
    const query = this.ctx.query
    this.ctx.body = query
  }
  // 获取指定文章
  async show () {
    const query = this.ctx.params
    this.ctx.body = query
  }
  // 新建文章
  async create (ctx) {
    ctx.validate(createRule, ctx.request.body)
    ctx.body = await ctx.service.article.create(ctx.request.body)
  }
  // 更新文章
  async update () {
    this.ctx.body = '更新文章'
  }
  // 删除文章
  async destroy () {
    this.ctx.body = '删除文章'
  }
}

module.exports = ArticleController