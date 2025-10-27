"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      username: email,
      password,
      callbackUrl: "http://localhost:3000/",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl w-96 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome Back</h1>
        <p className="text-gray-300 mb-8">Sign in to continue to your dashboard</p>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 mb-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
        >
          Sign in with Google
        </button>

        <div className="my-4 text-gray-400">or</div>

        {/* Credentials Login */}
        <form  className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            onClick={(e)=>{handleCredentialsLogin(e)}}
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors"
          >
            Sign in with Email
          </button>
        </form>
      </div>
    </div>
  );
}
