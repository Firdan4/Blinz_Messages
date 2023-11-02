import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-hot-toast";
import login from "./login";

interface PropsRegisterAccount {
  data: FieldValues;
}

async function registerAccount({ data }: PropsRegisterAccount) {
  await axios
    .post("/api/register", data)
    .then(async () => await login({ data }))
    .catch((err) => {
      toast.error(err.response.data);
    });

  //   console.log(res);
}

export default registerAccount;
