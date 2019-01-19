'use strict'

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547804058795_1060'

  // add your config here
  config.middleware = ['errorHandler']

  config.errorHandler = {
    match: '/api'
  }

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/mother',
    options: {
      server: { poolSize: 20 },
      reconnectTries: 10,
      reconnectInterval: 500
    }
  }
  // config.security = {
  //   csrf: {
  //     headerName: 'x-csrf-token' // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
  //   }
  // }

  return config
}
