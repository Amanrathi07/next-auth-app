import { auth } from "@/app/lib/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth(auth());

export { handler as GET, handler as POST };
