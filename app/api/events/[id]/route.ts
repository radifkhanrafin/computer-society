import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Event from '@/models/Event'
import mongoose from 'mongoose'
import { z } from 'zod'

const updateEventSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  date: z.string().transform(d => new Date(d)).optional(),
  time: z.string().optional(),
  location: z.string().optional(),
  banner: z.string().optional(),
  category: z.string().optional(),
  attendees: z.number().optional(),
  status: z.enum(['upcoming', 'ongoing', 'completed']).optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid event ID' },
        { status: 400 }
      )
    }

    await connectDB()
    const event = await Event.findById(id)

    if (!event) {
      return NextResponse.json(
        { success: false, message: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Event retrieved',
        data: event,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('  Get event error:', error)
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
        { success: false, message: 'Invalid event ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const validatedData = updateEventSchema.parse(body)

    await connectDB()

    const event = await Event.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    })

    if (!event) {
      return NextResponse.json(
        { success: false, message: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Event updated successfully',
        data: event,
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

    console.error('  Update event error:', error)
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
        { success: false, message: 'Invalid event ID' },
        { status: 400 }
      )
    }

    await connectDB()

    const event = await Event.findByIdAndDelete(id)

    if (!event) {
      return NextResponse.json(
        { success: false, message: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Event deleted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('  Delete event error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
