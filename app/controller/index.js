const {Controller} = require('egg')

class HomeController extends Controller {
  async index() {
    await this.ctx.render('admin/index.html')
  }
  async create() {
    this.ctx.body = '创建'
  }
  async update() {
    this.ctx.body = '更新'
  }
  async destroy() {
    this.ctx.body = '删除'
  }
  async show() {
    this.ctx.body = '单个查询'
  }
  async upload() {
    this.ctx.body = '上传'
  }
}

module.exports = HomeController
