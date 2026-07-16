import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Gallery from '@/models/Gallery'
import mongoose from 'mongoose'
import { z } from 'zod'

const updateGallerySchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  images: z.array(z.object({
    url: z.string(),
    caption: z.string().optional(),
  })).optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid gallery ID' },
        { status: 400 }
      )
    }

    await connectDB()
    const gallery = await Gallery.findById(id)
    if (!gallery) {
      return NextResponse.json(
        { success: false, message: 'Gallery not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Gallery retrieved', data: gallery },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Get gallery error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid gallery ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const validatedData = updateGallerySchema.parse(body)

    await connectDB()
    const gallery = await Gallery.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    })

    if (!gallery) {
      return NextResponse.json(
        { success: false, message: 'Gallery not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Gallery updated successfully', data: gallery },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', error: error.errors[0].message },
        { status: 400 }
      )
    }
    console.error('[v0] Update gallery error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid gallery ID' },
        { status: 400 }
      )
    }

    await connectDB()
    const gallery = await Gallery.findByIdAndDelete(id)
    if (!gallery) {
      return NextResponse.json(
        { success: false, message: 'Gallery not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Gallery deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Delete gallery error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
