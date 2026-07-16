export interface Admin {
  _id: string
  email: string
  password: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface Member {
  _id: string
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

export interface CommitteeMember {
  _id: string
  name: string
  position: string
  photo?: string
  email?: string
  phone?: string
  bio?: string
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface Event {
  _id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  banner?: string
  category: string
  attendees: number
  status: 'upcoming' | 'ongoing' | 'completed'
  createdAt: Date
  updatedAt: Date
}

export interface Blog {
  _id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  cover?: string
  category: string
  tags: string[]
  views: number
  published: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface Gallery {
  _id: string
  title: string
  description?: string
  images: Array<{
    url: string
    caption?: string
  }>
  createdAt: Date
  updatedAt: Date
}

export interface Achievement {
  _id: string
  title: string
  description: string
  image?: string
  category: string
  date: Date
  winners?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Sponsor {
  _id: string
  name: string
  logo: string
  website?: string
  category: string
  createdAt: Date
  updatedAt: Date
}

export interface Settings {
  _id: string
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

export interface AuthResponse {
  token: string
  admin: {
    id: string
    email: string
    name: string
  }
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}
