import mongoose from 'mongoose'

const daily3 = new mongoose.Schema({
  winnngNumbers: [{
    type: Number,
    required: true
  }],
})

export default mongoose.model("Lotto", daily3)