import { signIn } from "next-auth/react";
import React, { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-hot-toast";

interface propsLogin {
  data: FieldValues;
}

async function login({ data }: propsLogin) {
  await signIn("credentials", {
    redirect: false,
    ...data,
  }).then((callback) => {
    if (callback?.error) {
      toast.error(callback?.error);
    }

    if (callback?.ok && !callback.error) {
      toast.success("Sign in Successfuly!");
    }
  });
}

export default login;
