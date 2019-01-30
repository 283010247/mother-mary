const {Controller} = require('egg')

class PcController extends Controller {
  async index (ctx) {
    await ctx.render('pc/index.html')
  }
}

module.exports = PcController