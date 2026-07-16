import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Achievement from '@/models/Achievement'
import mongoose from 'mongoose'
import { z } from 'zod'

const updateAchievementSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  date: z.string().transform(d => new Date(d)).optional(),
  winners: z.array(z.string()).optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid achievement ID' },
        { status: 400 }
      )
    }

    await connectDB()
    const achievement = await Achievement.findById(id)
    if (!achievement) {
      return NextResponse.json(
        { success: false, message: 'Achievement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Achievement retrieved', data: achievement },
      { status: 200 }
    )
  } catch (error) {
    // console.error('  Get achievement error:', error)
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
        { success: false, message: 'Invalid achievement ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const validatedData = updateAchievementSchema.parse(body)

    await connectDB()
    const achievement = await Achievement.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    })

    if (!achievement) {
      return NextResponse.json(
        { success: false, message: 'Achievement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Achievement updated successfully', data: achievement },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', error: error.errors[0].message },
        { status: 400 }
      )
    }
    // console.error('  Update achievement error:', error)
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
        { success: false, message: 'Invalid achievement ID' },
        { status: 400 }
      )
    }

    await connectDB()
    const achievement = await Achievement.findByIdAndDelete(id)
    if (!achievement) {
      return NextResponse.json(
        { success: false, message: 'Achievement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Achievement deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    // console.error('  Delete achievement error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
