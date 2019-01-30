const {Controller} = require('egg')

class MobileController extends Controller {
  async index (ctx) {
    await ctx.render('mobile/index.html')
  }
}

module.exports = MobileController