import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import connectMongo from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
declare module "next-auth" {
  interface Session {
    user: {
      id: string;  
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const handler = NextAuth({
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.id = token.id as string; // เพิ่มการส่ง ID ของผู้ใช้ไปยัง session
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Credentials are required');
        }

        // เชื่อมต่อ MongoDB
        await connectMongo();
        
        // ค้นหาผู้ใช้ตามอีเมล
        const user = await User.findOne({ email: credentials.email });
        if (user) {
          // ตรวจสอบรหัสผ่านที่เข้ารหัส
          const isValidPassword = await bcrypt.compare(credentials.password, user.password);
          if (!isValidPassword) {
            throw new Error('Invalid email or password');
          }

          // คืนค่าผู้ใช้พร้อม `id` และ `email`
          return {
            id: user._id.toString(), // แมป `_id` ของ MongoDB เป็น `id`
            email: user.email,
          };
        } else {
          // ไม่พบผู้ใช้
          return null;
        }
      }
    })
  ]
});

export { handler as GET, handler as POST };