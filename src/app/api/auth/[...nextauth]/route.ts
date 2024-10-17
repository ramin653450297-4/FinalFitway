import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import connectMongo from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    session: { strategy: 'jwt' },
    pages: { signIn: '/login' },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id; // Store user ID in the token
          token.email = user.email; // Store user email in the token
        }
        return token;
      },
      async session({ session, token }) {
        // Pass the token's email to the session
        session.user.email = token.email;
        return session;
      },
      redirect({ baseUrl }) {
        return baseUrl; // Redirect to the base URL after login
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
          await connectMongo();
  
          const user = await User.findOne({ email: credentials.email });
          if (!user) throw new Error('No user found');
  
          const isValidPassword = await bcrypt.compare(credentials.password, user.password);
          if (!isValidPassword) throw new Error('Invalid password');
  
          return { id: user._id, email: user.email }; // Return user data for the session
        },
      }),
    ],
  });
  
  export { handler as GET, handler as POST };