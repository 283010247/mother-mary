const { Service } = require('egg')

class ArticleService extends Service {
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
  async create (params) {
    try {
      await this.ctx.model.Article.create(params)
      return {msg:'success', code: 0}
    } catch (error) {
      return {msg: error, code: 1}
    }
  }
  // 更新文章
  async update (id, body) {
    try {
      await this.ctx.model.Article.update({_id: id}, body)
      return {msg:'success', code: 0}
    } catch (error) {
      return {msg: error, code: 1}
    }
  }
  // 删除文章
  async destroy () {
    this.ctx.body = '删除文章'
  }
}

module.exports = ArticleService