const { Controller } = require('egg')

const rule = {
  email: {
    type: 'string'
  },
  password: {
    type: 'string'
  }
}

class UserController extends Controller {
  // 登陆
  async login(ctx) {
    ctx.validate(rule, ctx.request.body)
    const { user, match, msg, code } = await ctx.service.checkPassword(email, password)
    if (match) {
      ctx.session.user = {
        _id: user._id,
        email: user.email,
        role: user.role,
        username: user.username
      }

      ctx.body = {
        msg,
        data: {
          email: user.email,
          username: user.username
        }
      }
    }

    ctx.body = {
      msg,
      code
    }
  }
}

module.exports = UserController
