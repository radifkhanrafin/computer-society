import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Achievement from '@/models/Achievement'
import { z } from 'zod'

const createAchievementSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().optional(),
  category: z.string().min(1),
  date: z.string().transform(d => new Date(d)),
  winners: z.array(z.string()).optional(),
})

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const achievements = await Achievement.find().sort({ date: -1 })
    return NextResponse.json(
      { success: true, message: 'Achievements retrieved', data: achievements },
      { status: 200 }
    )
  } catch (error) {
    console.error('  Get achievements error:', error)
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
    const validatedData = createAchievementSchema.parse(body)

    await connectDB()
    const achievement = await Achievement.create(validatedData)

    return NextResponse.json(
      { success: true, message: 'Achievement created successfully', data: achievement },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', error: error.errors[0].message },
        { status: 400 }
      )
    }
    console.error('  Create achievement error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
