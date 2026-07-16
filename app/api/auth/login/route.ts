import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { generateToken, setAuthCookie } from "@/lib/auth";
import Admin from "@/models/Admin";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[Login POST] Request Body:", body);
    const validatedData = loginSchema.parse(body);
    console.log("[Login POST] Validated Data:", validatedData);
    await connectDB();

    const admin = await Admin.findOne({ email: validatedData.email }).select(
      "+password",
    );
    console.log("[Login POST] Retrieved Admin:", admin);
    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
          error: "Admin not found",
        },
        { status: 401 },
      );
    }

    const isPasswordValid = await admin.comparePassword(validatedData.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
          error: "Password incorrect",
        },
        { status: 401 },
      );
    }

    const token = generateToken(admin._id.toString(), admin.email);

    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        data: {
          admin: {
            id: admin._id,
            email: admin.email,
            name: admin.name,
          },
        },
      },
      { status: 200 },
    );

    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          error: error.errors[0].message,
        },
        { status: 400 },
      );
    }

    console.error("  Login error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: "An error occurred during login",
      },
      { status: 500 },
    );
  }
}
