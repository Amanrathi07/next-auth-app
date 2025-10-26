"use client";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";



export default function Home() {
  const session = useSession()

  return (
    <div>
      {session.status === "authenticated" ? <button onClick={() => {
        signOut()
      }}>signout</button> : <button onClick={() => {
        signIn()
      }}>signIn</button>}

    </div>
  )
}


