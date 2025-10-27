"use client";


import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

import { NEXT_VATIABLE } from "./lib/auth"


export default function Home() {
  const session = useSession(NEXT_VATIABLE)

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
