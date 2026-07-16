import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import { connectDB } from '@/lib/db'
import Admin from '@/models/Admin'

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser()

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized', error: 'No valid token' },
        { status: 401 }
      )
    }

    await connectDB()
    const admin = await Admin.findById(user.adminId)

    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Admin not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'User data retrieved',
        data: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Get user error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
