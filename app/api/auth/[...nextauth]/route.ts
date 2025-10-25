import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
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
                const dbResponse = { username: "aman", password: "amanaman" };

                if (username === dbResponse.username && password === dbResponse.password) {
                    return {dbResponse}; // returns user object
                }
                return null; // invalid credentials
            }
        })


        ,

    ]
});

export { handler as GET, handler as POST };
