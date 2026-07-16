import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Gallery from '@/models/Gallery'
import { z } from 'zod'

const createGallerySchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  images: z.array(z.object({
    url: z.string(),
    caption: z.string().optional(),
  })).default([]),
})

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const galleries = await Gallery.find().sort({ createdAt: -1 })
    return NextResponse.json(
      { success: true, message: 'Galleries retrieved', data: galleries },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Get galleries error:', error)
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
    const validatedData = createGallerySchema.parse(body)

    await connectDB()
    const gallery = await Gallery.create(validatedData)

    return NextResponse.json(
      { success: true, message: 'Gallery created successfully', data: gallery },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', error: error.errors[0].message },
        { status: 400 }
      )
    }
    console.error('[v0] Create gallery error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
