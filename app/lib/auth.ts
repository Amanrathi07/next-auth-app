
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";


export const NEXT_VATIABLE = 
         {
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
               username: { label: "Username", type: "text", placeholder: "username" },
               password: { label: "Password", type: "password",placeholder: "password" }
            },
            async authorize(credentials,res) {
                const username = credentials?.username;
                const password = credentials?.password;

                // Your logic to check username/password
                const user = { id:1 ,name:"aman", email: "amanrathi@gmail.com", password: "amanaman" };

                if ( user) {
                    return user; // returns user object
                }
                return null; // invalid credentials
            }
        }), GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || "" ,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
  })

    ],
    secret : process.env.NEXTAUTH_SECRET
    ,
    callbacks: {
  async jwt({ token, user }) {
    if (user) token.id = user.id;
    return token;
  },
  async session({ session, token }) {
    session.user.id = token.id;
    return session;
  }
},
pages:{
  signIn:"/signin"
}
    
} 
    