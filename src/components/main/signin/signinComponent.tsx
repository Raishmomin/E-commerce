import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignInComponent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-[#103A3A]">
      <div className="w-full max-w-lg space-y-4">
        <div className="flex flex-col justify-center items-center w-full ">
          <Label className="text-4xl font-serif font-semibold mb-3 text-[#103A3A]">
            Login
          </Label>
          <Label className="text-lg text-[#103A3A]">
            If you have an account with us, please Log in
          </Label>
        </div>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-base text-[#103A3A]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className="text-base text-[#103A3A]"
                  >
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="ml-auto text-gray-600 inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  placeholder="********"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full h-14 text-white rounded-none font-semibold bg-[#103A3A] text-base"
          >
            SIGN IN
          </Button>
          or
          <Button
            variant="outline"
            className="w-full rounded-none h-14 space-x-2 text-[#103A3A] border-[#103A3A] font-semibold text-base"
          >
            <FcGoogle />
            Login with Google
          </Button>
          <div>
            If you don't have an account?
            <Link href="/sign-up" className="underline ml-1">
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </div>
    </div>
  );
};

export default SignInComponent;
