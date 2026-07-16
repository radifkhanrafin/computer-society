import mongoose, { Schema, Document } from 'mongoose'

export interface IGallery extends Document {
  title: string
  description?: string
  images: Array<{
    url: string
    caption?: string
  }>
  createdAt: Date
  updatedAt: Date
}

const GallerySchema = new Schema<IGallery>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        caption: String,
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Gallery ||
  mongoose.model<IGallery>('Gallery', GallerySchema)
