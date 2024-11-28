import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    await connectMongo();

    // รับข้อมูลจาก request body
    const { email, password, firstName, lastName , phoneNumber } = await request.json();

    // ตรวจสอบว่า email มีอยู่ในระบบแล้วหรือไม่
    const existingUser = await User.findOne({ email });
    

    if (existingUser) {
      if (existingUser.email === email) {
        return NextResponse.json({ message: 'อิเมลนี้สมัครสมาชิกแล้ว' }, { status: 400 });
      }
    }
    // สร้างผู้ใช้ใหม่
    const newUser = new User({
      email,
      password,
      firstName,
      lastName,
      phoneNumber
    });

    // บันทึกผู้ใช้ลงในฐานข้อมูล
    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });

  } catch (error: unknown) {
    console.error('Error during registration:', error);
    return NextResponse.json({ message: 'Registration failed' }, { status: 500 });
  }
}