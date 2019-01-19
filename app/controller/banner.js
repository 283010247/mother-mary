'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = '查询所有'
  }
  async create() {
    this.ctx.body = '创建'
  }
  async update() {
    this.ctx.body = '更新'
  }
  async destroy() {
    this.ctx.body = '删除'
  }
  async show() {
    this.ctx.body = '单个查询'
  }
}

module.exports = HomeController
