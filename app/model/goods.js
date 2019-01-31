module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const GoodsSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    describe: {
      type: String,
      required: true
    },
    imgs: {
      type: Array,
      require: true
    },
    // 分类
    _cate: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Cate'
    },
    created_at: {
      type: Date,
      default: Date()
    },
    updated_at: {
      type: Date,
      default: Date()
    }
  })
  GoodsSchema.pre('save', function (next) {
    if (this.isNew) {
      this.createdAt = this.updatedAt = Date.now()
    } else {
      this.updatedAt = Date.now()
    }

    next()
  })
  return mongoose.model('Goods', GoodsSchema)
}
