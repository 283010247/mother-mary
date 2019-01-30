const { Service } = require('egg')

class UserService extends Service {
  async checkPwd(email, password) {
    const { User } = this.ctx.model
    let match = false

    const userInfo = await User.findOne({ email: email }).exec()

    if (userInfo) {
      try {
        match = await User.comparePassword(password, userInfo.password)
      } catch (error) {
        return { msg: error, code: 1, match: false }
      }
    }

    return {
      msg: error,
      code: 0,
      match,
      userInfo
    }
  }
}

module.exports = UserService
