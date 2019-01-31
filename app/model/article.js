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
  ArticleSchema.pre('save', function (next) {
    if (this.isNew) {
      this.createdAt = this.updatedAt = Date.now()
    } else {
      this.updatedAt = Date.now()
    }

    next()
  })
  return mongoose.model('Article', ArticleSchema)
}
