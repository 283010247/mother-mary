const { Controller } = require('egg')

// 登陆验证
const loginRule = {
  email: {
    type: 'string'
  },
  password: {
    type: 'string'
  }
}

// 注册验证
const registerRule = {
  username: {
    type: 'string'
  },
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
    ctx.validate(loginRule, ctx.request.body)
    const { email, password } = ctx.request.body
    ctx.body = await ctx.service.user.checkPwd(email, password)
  }
  // 创建账户
  async register(ctx) {
    const { body } = ctx.request
    ctx.validate(registerRule, body)
    ctx.body = await ctx.service.user.register(body)
  }
}

module.exports = UserController
