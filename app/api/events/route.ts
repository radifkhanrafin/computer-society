import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Event from '@/models/Event'
import { z } from 'zod'

const createEventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().transform(d => new Date(d)),
  time: z.string().min(1, 'Time is required'),
  location: z.string().min(1, 'Location is required'),
  banner: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  attendees: z.number().optional(),
  status: z.enum(['upcoming', 'ongoing', 'completed']).optional(),
})

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const events = await Event.find().sort({ date: -1 })

    return NextResponse.json(
      {
        success: true,
        message: 'Events retrieved',
        data: events,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('  Get events error:', error)
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
    const validatedData = createEventSchema.parse(body)

    await connectDB()

    const event = await Event.create(validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Event created successfully',
        data: event,
      },
      { status: 201 }
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

    console.error('  Create event error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
