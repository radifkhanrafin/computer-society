import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { connectDB } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import Committee from '@/models/Committee'

const createCommitteeSchema = z.object({
  identity: z.enum(['student', 'faculty', 'advisor']).default('student'),

  name: z.string().min(1, 'Name is required'),

  position: z.string().min(1, 'Position is required'),

  studentID: z.string().optional(),

  email: z.string().email('Invalid email').optional(),

  phone: z.string().optional(),

  department: z.string().min(1, 'Department is required'),

  year: z.string().optional(),

  batch: z.string().optional(),

  shift: z.string().optional(),

  semester: z.string().optional(),

  hobbies: z.array(z.string()).default([]),

  skills: z.array(z.string()).default([]),

  facebook: z.string().url().optional(),

  linkedin: z.string().url().optional(),

  github: z.string().url().optional(),

  portfolio: z.string().url().optional(),

  responsibilities: z.string().optional(),

  bio: z.string().optional(),

  profilePicture: z.string().url().optional(),

  order: z.number().default(0),

  isActive: z.boolean().default(true),
})

export async function GET() {
  try {
    await connectDB()

    const committee = await Committee.find({
      isActive: true,
    }).sort({
      order: 1,
      createdAt: 1,
    })
console.log('[Committee GET] Retrieved committee members:', committee)
    return NextResponse.json(
      {
        success: true,
        message: 'Committee members retrieved successfully',
        data: committee,
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error('[Committee GET]', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      {
        status: 500,
      }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser()

    // if (!user) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: 'Unauthorized',
    //     },
    //     {
    //       status: 401,
    //     }
    //   )
    // }

    await connectDB()

    const body = await request.json()
    console.log('[Committee POST] Request Body:', body)

    const validatedData = createCommitteeSchema.parse(body)

    const member = await Committee.create(validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Committee member created successfully',
        data: member,
      },
      {
        status: 201,
      }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation Error',
          errors: error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      )
    }

    console.error('[Committee POST]', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      {
        status: 500,
      }
    )
  }
}