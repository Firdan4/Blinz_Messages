"use client";

import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

import FormInput from "./FormInput";
import SocialMediaAuth from "./SocialMediaAuth";

type variants = "LOGIN" | "REGISTER";

function AuthForm() {
  const [variant, setVariant] = useState<variants>("REGISTER");

  return (
    <div className="w-full px-2">
      <div className="flex flex-col shadow-md px-5 py-7 rounded-md bg-white gap-5">
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
      </div>
    </div>
  );
}

export default AuthForm;
