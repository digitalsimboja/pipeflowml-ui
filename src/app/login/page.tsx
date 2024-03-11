"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  SignInUserInput,
  SignInUserMutationVariables,
  useSignInUserMutation,
} from "src/GraphQLComponents";
import { isValidEmail } from "src/utils/isValidEmail";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signInMutation] = useSignInUserMutation();

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emptyField = Object.entries(formData).find(
      ([key, value]) => value.trim() === ""
    );

    if (emptyField) {
      // Focus on the first empty input field
      const [fieldName] = emptyField;
      const inputElement = document.querySelector(
        `input[name="${fieldName}"]`
      ) as HTMLInputElement;

      if (inputElement) {
        inputElement.focus();
      }

      return;
    }
    const isEmailValid = isValidEmail(formData.email);
    if (!isEmailValid) {
      return;
    }

    const response = await signIn(formData);
    if (response?.sessionToken) {
      localStorage.setItem("token", response.sessionToken);
      router.push(`/agents/bc5adc/${response.sessionToken}`);
    } else {
      console.error("Error logging in user ");
    }
  };

  const signIn = async (data: SignInUserInput) => {
    try {
      // Use the signInUser mutation here
      const { data } = await signInMutation({
        variables: {
          data: {
            email: formData.email,
            password: formData.password,
          },
        } as SignInUserMutationVariables,
      });
      if (data?.signInUser) {
        console.log("User logged in sucessfully");
        return data.signInUser;
      }
    } catch (error) {
      console.error("Error logging in the user: ", error);
    }
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
          <div className="flex flex-row px-2 gap-2 text-center">
            <p>Don't have an account yet? </p>
            <Link href="/signup" className="text-blue-900 font-bold">
              Sign up
            </Link>
          </div>
        </div>
        <div className="mb-4 p-4 bg-white rounded-md shadow-md">
          <form className="flex flex-col" onSubmit={handleLogin}>
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
            <button className="border p-2 rounded-md w-full bg-black text-white tracking-wide text-xl font-bold">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
