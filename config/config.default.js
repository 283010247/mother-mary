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

  config.alinode = {
    "appid": "78246",
    "secret": "b6403f83b7439789952d858b0411e70d0c87e993",
    "error_log": ["/data/logs/mother-marry-error.log"],
    "packages": ["/data/www/node/package.json"]
  }

  // config.redis = {
  //   client: {
  //     port: 6379,          // Redis port
  //     host: '127.0.0.1',   // Redis host
  //     password: 'auth',
  //     db: 0,
  //   }
  // }

  return config
}
