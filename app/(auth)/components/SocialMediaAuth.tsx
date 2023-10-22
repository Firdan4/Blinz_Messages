import React from "react";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

import SocialMediaButton from "./SocialMediaButton";

const SocialMediaAuth = () => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="z-10 bg-white px-1">
          <p className="text-xs text-gray-600">Or contiue with</p>
        </div>
        <span className="flex absolute h-[1px] w-full bg-gray-500" />
      </div>

      <div className="flex items-center justify-evenly gap-3">
        <SocialMediaButton icon={AiOutlineGoogle} />
        <SocialMediaButton icon={AiOutlineGithub} />
      </div>
    </>
  );
};

export default SocialMediaAuth;
