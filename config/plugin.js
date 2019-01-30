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
