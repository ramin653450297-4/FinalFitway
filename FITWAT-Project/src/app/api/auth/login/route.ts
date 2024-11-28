import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function handleDatabaseConnection() {
  await connectMongo();
  console.log('MongoDB connected');
}

async function findUser(email: string) {
  const user = await User.findOne({ email });
  return user;
}

async function validatePassword(inputPassword: string, hashedPassword: string) {
  const isValid = await bcrypt.compare(inputPassword, hashedPassword);
  return isValid;
}

function createToken(userId: string) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
  return token;
}

export async function POST(request: Request) {
  try {
    await handleDatabaseConnection();

    const { email, password } = await request.json();
    console.log('Received email and password:', { email, password });

    const user = await findUser(email);
    if (!user) {
      console.log('User not found');
      return NextResponse.json({ message: 'ไม่พบผู้ใช้' }, { status: 400 });
    }

    console.log('User found:', user);

    const isPasswordValid = await validatePassword(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password');
      return NextResponse.json({ message: 'รหัสผ่านไม่ถูกต้อง' }, { status: 400 });
    }

    console.log('Password is valid');

    const token = createToken(user._id);
    console.log('JWT Token created:', token);

    return NextResponse.json({ token, _id: user._id }, { status: 200 }); 
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Login failed' }, { status: 500 });
  }
}