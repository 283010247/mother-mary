'use strict'

// had enabled by egg
// exports.static = true;
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose'
}

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}

exports.validate = {
  enable: true,
  package: 'egg-validate'
}

exports.alinode = {
  enable: true,
  package: 'egg-alinode',
}

// module.exports.passport = {
//   enable: true,
//   package: 'egg-passport',
// }

// exports.passportQQ = {
//   enable: true,
//   package: 'egg-passport-qq',
// }

// exports.redis = {
//   enable: true,
//   package: 'egg-redis',
// }