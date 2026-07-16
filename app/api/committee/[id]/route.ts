import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Committee from '@/models/Committee'
import mongoose from 'mongoose'
import { z } from 'zod'

const updateCommitteeSchema = z.object({
  name: z.string().optional(),
  position: z.string().optional(),
  photo: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  bio: z.string().optional(),
  order: z.number().optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid committee member ID' },
        { status: 400 }
      )
    }

    await connectDB()
    const member = await Committee.findById(id)

    if (!member) {
      return NextResponse.json(
        { success: false, message: 'Committee member not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Committee member retrieved',
        data: member,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Get committee member error:', error)
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
        { success: false, message: 'Invalid committee member ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const validatedData = updateCommitteeSchema.parse(body)

    await connectDB()

    const member = await Committee.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    })

    if (!member) {
      return NextResponse.json(
        { success: false, message: 'Committee member not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Committee member updated successfully',
        data: member,
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          error: error.errors[0].message,
        },
        { status: 400 }
      )
    }

    console.error('[v0] Update committee member error:', error)
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
        { success: false, message: 'Invalid committee member ID' },
        { status: 400 }
      )
    }

    await connectDB()

    const member = await Committee.findByIdAndDelete(id)

    if (!member) {
      return NextResponse.json(
        { success: false, message: 'Committee member not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Committee member deleted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Delete committee member error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
