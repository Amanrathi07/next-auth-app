import { NEXT_VATIABLE } from "@/app/lib/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth(NEXT_VATIABLE);

export { handler as GET, handler as POST };
