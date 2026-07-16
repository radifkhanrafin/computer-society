import mongoose, { Schema, Document } from 'mongoose'

export interface ICommittee extends Document {
  identity: 'student' | 'faculty' | 'advisor'

  name: string
  position: string

  studentID?: string

  email?: string
  phone?: string

  department: string
  year?: string
  batch?: string
  shift?: string
  semester?: string

  hobbies: string[]
  skills: string[]

  facebook?: string
  linkedin?: string
  github?: string
  portfolio?: string

  responsibilities?: string
  bio?: string

  profilePicture?: string

  order: number
  isActive: boolean

  createdAt: Date
  updatedAt: Date
}

const CommitteeSchema = new Schema<ICommittee>(
  {
    identity: {
      type: String,
      enum: ['student', 'faculty', 'advisor'],
      default: 'student',
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    position: {
      type: String,
      required: true,
      trim: true,
    },

    studentID: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },

    phone: {
      type: String,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    year: String,

    batch: String,

    shift: String,

    semester: String,

    hobbies: {
      type: [String],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    facebook: String,

    linkedin: String,

    github: String,

    portfolio: String,

    responsibilities: {
      type: String,
      trim: true,
    },

    bio: {
      type: String,
      trim: true,
    },

    profilePicture: String,

    order: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Committee ||
  mongoose.model<ICommittee>('Committee', CommitteeSchema)