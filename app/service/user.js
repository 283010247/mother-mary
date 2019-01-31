const { Service } = require('egg')

class UserService extends Service {
  // 校验密码
  async checkPwd({ email, password }) {
    const userInfo = await this.ctx.model.User.findOne({ email: email }).exec()
    if (userInfo) {
      try {
        if (await userInfo.comparePassword(password, userInfo.password)) {
          this.ctx.session.user = {
            _id: userInfo._id,
            email: userInfo.email,
            role: userInfo.role,
            username: userInfo.username
          }
          return { code: 0, data: userInfo, msg: '登陆成功' }
        } else {
          return { code: 0, data: '', msg: '密码错误' }
        }
      } catch (error) {
        return { code: 1, data: '', msg: error }
      }
    } else {
      return { code: 1, data: '', msg: '账号不存在' }
    }
  }
  // 注册账号
  // async register(body) {
  //   try {
  //     const data = await this.ctx.model.User.create({...body, role: 'admin'})
  //     return { msg: 'success', code: 0, data }
  //   } catch (error) {
  //     return { msg: error, code: 1 }
  //   }
  // }
}

module.exports = UserService
