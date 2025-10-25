"use client";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";



export default function Home() {

  return (
   <SessionProvider>
    <RealHome />
  </SessionProvider>
  );
}


function RealHome(){
  const session = useSession()
  console.log(session)
  return(
    <div>
    {session.status ==="authenticated" ?<button onClick={()=>{
      signOut()
    }}>signout</button>:<button onClick={()=>{
      signIn() ;
      
    }}>signIn</button>}
    
  </div>
  )
}