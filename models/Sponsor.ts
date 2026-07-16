import mongoose, { Schema, Document } from 'mongoose'

export interface ISponsor extends Document {
  name: string
  logo: string
  website?: string
  category: string
  createdAt: Date
  updatedAt: Date
}

const SponsorSchema = new Schema<ISponsor>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      required: true,
    },
    website: String,
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Sponsor ||
  mongoose.model<ISponsor>('Sponsor', SponsorSchema)
