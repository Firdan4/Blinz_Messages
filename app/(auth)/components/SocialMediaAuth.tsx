import React from "react";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

import SocialMediaButton from "./SocialMediaButton";
import { loginSosmed } from "@/app/libs/auth/login";
import { useLoading } from "@/context/LoadingProvider";

const SocialMediaAuth = () => {
  const { setIsLoading } = useLoading();

  const socialAction = async (action: string) => {
    setIsLoading(true);
    await loginSosmed({ action, setIsLoading });
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="z-10 bg-white px-1">
          <p className="text-xs text-gray-600">Or contiue with</p>
        </div>
        <span className="flex absolute h-[1px] w-full bg-gray-500" />
      </div>

      <div className="flex items-center justify-evenly gap-3">
        <SocialMediaButton
          onClick={() => socialAction("google")}
          icon={AiOutlineGoogle}
        />
        <SocialMediaButton
          onClick={() => socialAction("github")}
          icon={AiOutlineGithub}
        />
      </div>
    </>
  );
};

export default SocialMediaAuth;
