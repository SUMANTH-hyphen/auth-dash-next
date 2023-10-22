"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function Login() {

  const [credentials, setCredentials] = useState<{username: string, password: string}>({username: "", password: ""}) 

  const loginGoogle = () => signIn('google', { callbackUrl: '/dashboard' });
  const loginGithub = () => signIn('github', { callbackUrl: '/dashboard' });
  const loginCredentials = () => signIn('credentials', { callbackUrl: '/dashboard', username: credentials.username, password: credentials.password });

console.log(credentials)

  return (
    <>
      <div className="h-screen grid lg:grid-cols-2 sx:grid-cols-1">
        <div className="container mx-auto w-full place-content-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full lg:h-screen h-fill"
            fill="none"
          >
            <path
              d="M0 0L719.988 0L569.314 1024H0V0Z"
              fill="url(#paint0_linear_0_147)"
            />
            {/* <text className="relative top-1/2 left-[60%] md:top-[45%] md:left-[45%]" >
              Board
            </text> */}
            <defs>
              <linearGradient
                id="paint0_linear_0_147"
                x1="359.994"
                y1="0"
                x2="359.994"
                y2="1024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4285F4" />
                <stop offset="1" stopColor="#286DE0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-0 left-0 ml-4 mt-4">
            <text className="text-xl font-bold text-white">LOGO</text>
          </div>
          <text className="absolute top-1/2 left-[33%] text-4xl text-white font-bold md:top-[45%] md:left-[30%] md:text-6xl">
              Board
          </text>
          {/* <div className="absolute top-24 mt-5 left-[30%] ">

          </div> */}
        </div>

        <div className="container w-full mx-auto flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6">
            <div >
              <text className="text-2xl font-bold mb-2">Sign In</text><br/>
              <span>Sign in to your account</span>
            </div>
            <div className="grid lg:grid-cols-2 sx:grid-cols-1 gap-3">
              <div>
                <button className="rounded-lg bg-[#fff] items-center justify-evenly p-3 flex space-x-2 w-full" onClick={loginGoogle}>
                  <Image
                    width="24"
                    height="24"
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="google-logo"
                  />
                  <span>Sign in with Google</span>
                </button>
              </div>
              <div>
                <button className="rounded-lg bg-[#fff] flex space-x-2 w-full p-3 justify-evenly" onClick={loginGithub}>
                  <Image
                    width="24"
                    height="24"
                    src="https://img.icons8.com/ios-glyphs/90/github.png"
                    alt="github"
                  />
                  <span>Sign in with Github</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 p-5 rounded-lg bg-[#fff]">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="username... John Wick"
                    onChange={(e)=>setCredentials((prev)=>({...prev, username: e.target.value}))}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password... BabaYaga"
                    autoComplete="current-password"
                    required
                    onChange={(e)=>setCredentials((prev)=>({...prev, password: e.target.value}))}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  />
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <button
                //   type="submit"
                  className="flex w-full justify-center rounded-md bg-[#4285F4] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={loginCredentials}
                >
                  Sign in
                </button>
              </div>
            </div>
            <div className="text-center">
              Don’t have an account? Register here
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
