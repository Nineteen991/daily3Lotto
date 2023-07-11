import mongoose from 'mongoose'

const daily3 = new mongoose.Schema({
  winnngNumbers: [{
    type: Number,
    required: true
  }],
})

const lottoSchema = new mongoose.Schema({
  games: [daily3]
}, { timestamps: true })

export default mongoose.model("Lotto", lottoSchema)