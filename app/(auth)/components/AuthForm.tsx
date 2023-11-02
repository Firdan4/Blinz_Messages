"use client";

import React, { useState } from "react";
import { Button, Spinner } from "@material-tailwind/react";

import FormInput from "./FormInput";
import SocialMediaAuth from "./SocialMediaAuth";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useLoading } from "@/context/LoadingProvider";
import login from "@/app/libs/auth/login";
import registerAccount from "@/app/libs/auth/register";
import getSession from "@/hook/getSession";

type variants = "LOGIN" | "REGISTER";

function AuthForm() {
  const { setIsLoading } = useLoading();

  const [variant, setVariant] = useState<variants>("LOGIN");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    if (variant === "LOGIN") {
      await login({ data });
      setIsLoading(false);
    }

    if (variant === "REGISTER") {
      await registerAccount({ data });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full px-2 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col shadow-md p-8 sm:p-10 rounded-md bg-white gap-5 w-full sm:w-full sm:max-w-md"
      >
        {variant === "REGISTER" && (
          <FormInput
            label={"Name"}
            id={"name"}
            type={"text"}
            register={register}
            errors={errors}
          />
        )}

        <FormInput
          label={"Email"}
          id={"email"}
          type={"email"}
          register={register}
          errors={errors}
        />
        <FormInput
          label={"Password"}
          id={"password"}
          type={"password"}
          register={register}
          errors={errors}
        />

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
      </form>
    </div>
  );
}

export default AuthForm;
