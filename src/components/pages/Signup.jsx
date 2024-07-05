import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuth } from '../../action/useAuth';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { handleSignup } = useAuth();

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get started today!</h1>
            <p className="mt-4 text-gray-600">
              Join us now and explore our awesome services. It's fast and easy!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignup)} className="mx-auto mt-8 max-w-md space-y-6">
            <div>
              <label htmlFor="fullName" className="sr-only">Full Name</label>
              <div className="relative">
                <input
                  {...register("fullName", { required: true })} 
                  aria-invalid={errors.fullName ? "true" : "false"} 
                  className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Full Name"
                />
                {errors.fullName && <p role="alert" className="text-red-500 text-sm mt-1">Full Name is required</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  {...register("email", { required: "Email Address is required" })} 
                  aria-invalid={errors.email ? "true" : "false"} 
                  className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email"
                />
                {errors.email && <p role="alert" className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                <span className="absolute inset-y-0 end-0 flex items-center pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  {...register("password", { required: true })} 
                  aria-invalid={errors.password ? "true" : "false"} 
                  className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
                {errors.password && <p role="alert" className="text-red-500 text-sm mt-1">Password is required</p>}
                <span className="absolute inset-y-0 end-0 flex items-center pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Already have an account?
                <Link to="/login" className="text-blue-500 hover:text-blue-600 ml-1">Login</Link>
              </p>
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
