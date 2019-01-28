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
      require: false
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

  return mongoose.model('Goods', GoodsSchema)
}
