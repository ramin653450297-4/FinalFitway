import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb'; // ฟังก์ชันเชื่อมต่อ MongoDB
import User from '@/models/User'; // Model ของผู้ใช้

// GET - ดึงข้อมูลผู้ใช้ทั้งหมด
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connectMongo();
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
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
  } catch {
    return NextResponse.json({ message: 'Failed to create user'}, { status: 500 });
  }
}
