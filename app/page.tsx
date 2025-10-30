"use client";


import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";




export default function Home() {
  const session = useSession()

  return (
    <div>
      {session.status === "authenticated" ? 
                (<div>
                      <button onClick={() => {
                      signOut()
                    }}>signout </button> 
                    <br />
                    {JSON.stringify(session)}
                </div>)
      : <button onClick={() => {
        signIn()
       }}>signIn</button>
      }

    </div>
  )
}
