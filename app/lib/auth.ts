import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { prisma } from "@/app/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const NEXT_AUTH_CONFIG = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // Simple mock test logic (no hashing)
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // In test mode, skip bcrypt and just check plain text
        if (!user || user.password !== credentials.password) return null;

        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id;
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(NEXT_AUTH_CONFIG);
