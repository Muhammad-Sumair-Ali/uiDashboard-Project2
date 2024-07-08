import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { _useAuth } from '../../action/_useAuth';
import { useAuth } from '../../context/authContext';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { handleLogin } = _useAuth()




  return (
    <Card className="w-full max-w-sm mx-auto max-w-sm mt-5 mb-5">
      <form onSubmit={handleSubmit(handleLogin)} className="mb-0 mt-2 space-y-4 rounded-lg p-4 shadow-lg sm:p-5 lg:p-2">

      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input  {...register("email", { required: "Email Address is required" })} 
            aria-invalid={errors.email ? "true" : "false"}  id="email" type="email" placeholder="Your Email Adress" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input  {...register("password", { required: true })} 
            aria-invalid={errors.password ? "true" : "false"}  id="password" type="password"  placeholder="Your Password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-white"
        >
         Login 
        </Button>

        <p className="text-center text-sm text-gray-500">
          No account?
          <NavLink className="underline" to="/signup">Sign up</NavLink>
        </p>
      </CardFooter>
      </form>
    </Card>
  )
}
export default Login;