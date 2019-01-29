const { Controller } = require('egg')

class AdminController extends Controller {
  async index(ctx) {
    await ctx.render('admin/index.html')
  }
}

module.exports = AdminController