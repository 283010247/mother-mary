module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const CateSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    // 排序
    sort: {
      type: Number,
      required: true,
      default: 1
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  })

  return mongoose.model('Cate', CateSchema)
}
