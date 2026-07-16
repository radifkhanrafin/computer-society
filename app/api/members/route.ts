import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Member from '@/models/Member'
import { z } from 'zod'

const createMemberSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Phone is required'),
  roll: z.string().optional(),
  department: z.string().optional(),
  batch: z.string().optional(),
  photo: z.string().optional(),
  bio: z.string().optional(),
  skills: z.array(z.string()).optional(),
  social: z.object({
    linkedin: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    facebook: z.string().optional(),
  }).optional(),
})

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const members = await Member.find().sort({ createdAt: -1 })

    return NextResponse.json(
      {
        success: true,
        message: 'Members retrieved',
        data: members,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('  Get members error:', error)
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
    const validatedData = createMemberSchema.parse(body)

    await connectDB()

    const member = await Member.create(validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Member created successfully',
        data: member,
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

    console.error('  Create member error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
