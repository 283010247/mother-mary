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

  config.qiniu = {
    accessKey: 'R7wrNwfn9V9Rqtdc0aX-xOkNxFNSofiyj3Jh-o_e',
    secretKey: 'AJNblF6MeNPONhngybISQiyojSazo1mmzyx8Ru0p',
    bucket: 'virginmary',
    origin: 'plge4pwnk.bkt.clouddn.com'
  }

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks'
    }
  }

  return config
}
