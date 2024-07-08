import React from 'react';
import { useForm } from "react-hook-form";
import { _useAuth } from '../../action/_useAuth';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  import {Link} from "react-router-dom";

const Signup = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { handleSignup } = _useAuth();
  const RandomToken = Math.random() * 1273;
  
  return (
    <Card className="mx-auto max-w-sm mt-5">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleSignup)}>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <div className="gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input  {...register("fullName", { required: true })}
                  aria-invalid={errors.fullName ? "true" : "false"} id="full-name" placeholder="Full name" required /> {errors.fullName && <p className="text-red-600">Full Name is required</p>}
            </div>
          
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
               {...register("email", { required: "Email Address is required" })}
                aria-invalid={errors.email ? "true" : "false"}
              id="email"
              type="email"
              placeholder="email address"
              required
            /> {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input  {...register("password", { required: true })}
                 aria-invalid={errors.password ? "true" : "false"} id="password" type="password" placeholder="Password" />
          </div>
            <Input
                 type="hidden"
               {...register("token", { required: true })}
                     value={RandomToken}
                />
          <Button type="submit" className="w-full">
            Create an account
          </Button>
         
        </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
export default Signup