import mongoose, { Schema, Document } from 'mongoose'

export interface ISettings extends Document {
  siteName: string
  logo?: string
  favicon?: string
  heroBanner?: string
  phone: string
  email: string
  address: string
  social: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    youtube?: string
    github?: string
  }
  aboutText?: string
  updatedAt: Date
}

const SettingsSchema = new Schema<ISettings>(
  {
    siteName: {
      type: String,
      default: 'WUBCS',
    },
    logo: String,
    favicon: String,
    heroBanner: String,
    phone: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    social: {
      facebook: String,
      twitter: String,
      linkedin: String,
      instagram: String,
      youtube: String,
      github: String,
    },
    aboutText: String,
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Settings ||
  mongoose.model<ISettings>('Settings', SettingsSchema)
