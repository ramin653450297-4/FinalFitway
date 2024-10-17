import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb'; // ฟังก์ชันเชื่อมต่อ MongoDB
import User from '@/models/User'; // Model ของผู้ใช้

// GET - ดึงข้อมูลผู้ใช้ทั้งหมด
export async function GET() {
  try {
    await connectMongo(); // เชื่อมต่อกับ MongoDB

    // ดึงข้อมูลผู้ใช้ทั้งหมดจาก MongoDB
    const users = await User.find({});

    // ส่งข้อมูลกลับไปในรูปแบบ JSON
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch users', error }, { status: 500 });
  }
}

// POST - เพิ่มผู้ใช้ใหม่
export async function POST(request: Request) {
  try {
    const body = await request.json(); // ดึงข้อมูลจาก request body
    await connectMongo(); // เชื่อมต่อกับ MongoDB

    // สร้างผู้ใช้ใหม่
    const newUser = new User(body);
    await newUser.save(); // บันทึกผู้ใช้ใหม่ในฐานข้อมูล

    return NextResponse.json({ user: newUser }, { status: 201 }); // ตอบกลับพร้อมข้อมูลผู้ใช้ที่ถูกสร้าง
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create user', error }, { status: 500 });
  }
}
