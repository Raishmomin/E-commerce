import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignupComponent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-[#103A3A]">
      <div className="w-full max-w-xl space-y-4">
        <div className="flex flex-col  justify-center items-center w-full">
          <Label className="text-4xl font-serif font-semibold mb-3 text-[#103A3A]">
            Create an account
          </Label>
          <Label className="text-lg max-w-lg text-center text-[#103A3A]">
            Enter your details to create your account,If you have an account
            please Log in
          </Label>
        </div>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="First Name"
                    className="text-base text-[#103A3A]"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="Last Name"
                    className="text-base text-[#103A3A]"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
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
        <CardFooter className="flex-col gap-2 text-[#103A3A]">
          <Button
            type="submit"
            className="w-full h-14 text-white rounded-none font-semibold bg-[#103A3A] text-base"
          >
            CREATE AN ACCOUNT
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
            Already have an account?
            <Link href="/sign-in" className="underline ml-1">
              Login
            </Link>
          </div>
        </CardFooter>
      </div>
    </div>
  );
};

export default SignupComponent;
