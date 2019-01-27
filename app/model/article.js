module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const ArticleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    // 标识，1-新闻动态，2-公司简介
    flag: {
      type: Number,
      default: 3
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

  return mongoose.model('Article', ArticleSchema)
}
