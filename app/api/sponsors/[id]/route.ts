import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Sponsor from '@/models/Sponsor'
import mongoose from 'mongoose'
import { z } from 'zod'

const updateSponsorSchema = z.object({
  name: z.string().optional(),
  logo: z.string().optional(),
  website: z.string().optional(),
  category: z.string().optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid sponsor ID' },
        { status: 400 }
      )
    }

    await connectDB()
    const sponsor = await Sponsor.findById(id)
    if (!sponsor) {
      return NextResponse.json(
        { success: false, message: 'Sponsor not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Sponsor retrieved', data: sponsor },
      { status: 200 }
    )
  } catch (error) {
    console.error('  Get sponsor error:', error)
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
        { success: false, message: 'Invalid sponsor ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const validatedData = updateSponsorSchema.parse(body)

    await connectDB()
    const sponsor = await Sponsor.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    })

    if (!sponsor) {
      return NextResponse.json(
        { success: false, message: 'Sponsor not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Sponsor updated successfully', data: sponsor },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', error: error.errors[0].message },
        { status: 400 }
      )
    }
    console.error('  Update sponsor error:', error)
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
        { success: false, message: 'Invalid sponsor ID' },
        { status: 400 }
      )
    }

    await connectDB()
    const sponsor = await Sponsor.findByIdAndDelete(id)
    if (!sponsor) {
      return NextResponse.json(
        { success: false, message: 'Sponsor not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Sponsor deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('  Delete sponsor error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
