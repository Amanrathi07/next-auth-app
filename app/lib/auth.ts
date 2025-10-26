
import CredentialsProvider from "next-auth/providers/credentials";



export function auth(){
    console.log(process.env.NEXTAUTH_SECRET)
    return(
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
                const dbResponse = { username: "aman", password: "amanaman" };

                if (username === dbResponse.username && password === dbResponse.password) {
                    return {name : "aman" , ...dbResponse}; // returns user object
                }
                return null; // invalid credentials
            }
        })

    ],
    secreat : process.env.NEXTAUTH_SECRET
    ,
    
} 
    )
} 