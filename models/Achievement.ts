import mongoose, { Schema, Document } from 'mongoose'

export interface IAchievement extends Document {
  title: string
  description: string
  image?: string
  category: string
  date: Date
  winners?: string[]
  createdAt: Date
  updatedAt: Date
}

const AchievementSchema = new Schema<IAchievement>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: String,
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    winners: [String],
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Achievement ||
  mongoose.model<IAchievement>('Achievement', AchievementSchema)
