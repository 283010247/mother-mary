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
    views: {
      type: Number,
      default: 0
    },
    flag: {
      type: Number,
      default: 3
    },
    like: {
      type: Array,
      default: []
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
      }
    ],
    previous_article: {
      type: Object,
      default: null
    },
    next_article: {
      type: Object,
      default: null
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
