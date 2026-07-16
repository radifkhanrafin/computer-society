import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Sponsor from '@/models/Sponsor'
import { z } from 'zod'

const createSponsorSchema = z.object({
  name: z.string().min(1),
  logo: z.string().min(1),
  website: z.string().optional(),
  category: z.string().min(1),
})

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const sponsors = await Sponsor.find().sort({ createdAt: -1 })
    return NextResponse.json(
      { success: true, message: 'Sponsors retrieved', data: sponsors },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Get sponsors error:', error)
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
    const validatedData = createSponsorSchema.parse(body)

    await connectDB()
    const sponsor = await Sponsor.create(validatedData)

    return NextResponse.json(
      { success: true, message: 'Sponsor created successfully', data: sponsor },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', error: error.errors[0].message },
        { status: 400 }
      )
    }
    console.error('[v0] Create sponsor error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
