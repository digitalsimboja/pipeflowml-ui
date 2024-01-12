"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, FormEvent } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email + password);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex  gap-4  mb-4">
        <Link href="/">
          <Image
            width={200}
            height={200}
            src="/images/evveland_ai_agent_logo.png"
            alt="Evveland AI platform logo"
          />
        </Link>
      </div>
      <form className="flex flex-col items-center ">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 rounded-md"
        />
        <button
          className="border p-2 rounded-md w-[80%] bg-green-200 text-black tracking-wide text-xl font-bold"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
