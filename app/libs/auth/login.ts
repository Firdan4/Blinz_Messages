import { signIn } from "next-auth/react";
import React, { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-hot-toast";

interface propsLogin {
  data: FieldValues;
}
interface propsLoginSosmed {
  action: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
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

export async function loginSosmed({ action, setIsLoading }: propsLoginSosmed) {
  signIn(action, { redirect: false })
    .then((callback) => {
      if (callback?.error) {
        toast.error("Invalid Credential");
      }

      if (callback?.ok && !callback.error) {
        toast.success("Logged In!");
      }
    })
    .finally(() => setIsLoading(false));
}

export default login;
