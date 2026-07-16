import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Blog from '@/models/Blog'
import { z } from 'zod'

const createBlogSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).toLowerCase(),
  content: z.string().min(1),
  excerpt: z.string().min(1),
  author: z.string().min(1),
  cover: z.string().optional(),
  category: z.string().min(1),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  publishedAt: z.string().transform(d => new Date(d)).optional(),
})

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const blogs = await Blog.find().sort({ publishedAt: -1 })
    return NextResponse.json(
      { success: true, message: 'Blogs retrieved', data: blogs },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Get blogs error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validatedData = createBlogSchema.parse(body)

    await connectDB()
    const blog = await Blog.create(validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Blog created successfully',
        data: blog,
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', error: error.errors[0].message },
        { status: 400 }
      )
    }
    console.error('[v0] Create blog error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
