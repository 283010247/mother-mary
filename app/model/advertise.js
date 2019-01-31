module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const AdvertiseSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    imgs: {
      type: Array,
      required: true
    },
    // 标识，1-移动端轮播图，2-pc端轮播图
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
  AdvertiseSchema.pre('save', function (next) {
    if (this.isNew) {
      this.createdAt = this.updatedAt = Date.now()
    } else {
      this.updatedAt = Date.now()
    }

    next()
  })
  return mongoose.model('Advertise', AdvertiseSchema)
}
