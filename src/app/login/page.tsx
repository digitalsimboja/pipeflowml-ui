"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email + password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full md:w-[500px] flex flex-col p-4">
        <div className="flex items-center justify-center mb-4">
          <Link href="/">
            <Image
              width={200}
              height={200}
              src="/images/evveland_ai_agent_logo.png"
              alt="Evveland AI platform logo"
            />
          </Link>
        </div>
        <div className="mb-4">
          <h1 className="font-bold text-2xl mb-2 text-center">Login</h1>
          <div className="flex flex-col gap-2 text-center">
            <p>Don't have an account yet? </p>{" "}
            <Link href="/signup" className="text-blue-900 font-bold">
              Sign up
            </Link>
          </div>
        </div>
        <div className="mb-4 p-4 bg-white rounded-md shadow-md">
          <form className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600 block mb-2"
            >
              Email address
            </label>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-2 mb-2 w-full"
            />
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600 block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 mb-2 rounded-md w-full"
            />
            <button
              className="border p-2 rounded-md w-full bg-blue-100 text-black tracking-wide text-xl font-bold"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
