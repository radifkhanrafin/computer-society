import mongoose, { Schema, Document } from 'mongoose'

export interface IMember extends Document {
  name: string
  email: string
  phone: string
  roll?: string
  department?: string
  batch?: string
  photo?: string
  bio?: string
  skills?: string[]
  social?: {
    linkedin?: string
    github?: string
    twitter?: string
    facebook?: string
  }
  joinDate: Date
  createdAt: Date
  updatedAt: Date
}

const MemberSchema = new Schema<IMember>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      required: true,
    },
    roll: String,
    department: String,
    batch: String,
    photo: String,
    bio: String,
    skills: [String],
    social: {
      linkedin: String,
      github: String,
      twitter: String,
      facebook: String,
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Member || mongoose.model<IMember>('Member', MemberSchema)
