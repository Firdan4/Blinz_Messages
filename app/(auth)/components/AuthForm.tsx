"use client";

import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

import FormInput from "./FormInput";
import SocialMediaAuth from "./SocialMediaAuth";

type variants = "LOGIN" | "REGISTER";

function AuthForm() {
  const [variant, setVariant] = useState<variants>("LOGIN");

  return (
    <div className="w-full px-2 flex flex-col items-center justify-center">
      <div className="flex flex-col shadow-md p-8 sm:p-10 rounded-md bg-white gap-5 w-full sm:w-full sm:max-w-md">
        {variant === "REGISTER" && (
          <FormInput label={"Name"} id={"name"} type={"text"} />
        )}

        <FormInput label={"Email"} id={"email"} type={"email"} />
        <FormInput label={"Password"} id={"password"} type={"password"} />

        <div>
          <Button fullWidth type="submit" color="light-green">
            {variant === "REGISTER" ? "Register" : "Sign In"}
          </Button>
        </div>

        <SocialMediaAuth />

        <div className="flex gap-1 mt-2">
          <p className="text-xs text-gray-600">
            {variant === "LOGIN"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <p
            onClick={() =>
              setVariant(variant === "LOGIN" ? "REGISTER" : "LOGIN")
            }
            className="text-xs text-blue-600 cursor-pointer underline hover:text-blue-700"
          >
            {variant === "LOGIN" ? "Register" : "Sign in"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
