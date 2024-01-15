"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(formData);
    // Add your signup logic here
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
          <h1 className="font-bold text-2xl mb-2 text-center">Signup</h1>
          <div className="flex flex-col gap-2 text-center">
            <p>Already have an account? </p>{" "}
            <Link href="/login" className="text-blue-900 font-bold">
              Login
            </Link>
          </div>
        </div>
        <div className="mb-4 p-4 bg-white rounded-md shadow-md">
          <form className="flex flex-col" onSubmit={handleSignup}>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600 block mb-2"
            >
              Email address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
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
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded-md w-full"
            />
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-600 block mb-2"
            >
              Re-type Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded-md w-full"
            />
            <div className="flex items-center justify-center">
              <button
              type="submit"
                className="border p-2 rounded-md w-full bg-blue-100 text-black tracking-wide text-xl font-bold"
               
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
