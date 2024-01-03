import React from "react";
import { IconType } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full">
        <div className="z-10 bg-white px-1">
          <p className="text-xs text-gray-600">Or contiue with</p>
        </div>
        <span className="flex absolute h-[1px] w-full bg-gray-500" />
      </div>

      <div className="flex items-center justify-evenly gap-3 w-full">
        <SocialMediaButton icon={FcGoogle} />
        <SocialMediaButton icon={AiOutlineGithub} />
      </div>
    </>
  );
};

interface SocialMediaButtonProps {
  icon: IconType;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon: Icon,
}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <button className="shadow rounded-full w-full hover:shadow-md bg-gray-100 py-1">
        <Icon className="mx-auto" size={"30px"} />
      </button>
    </div>
  );
};

export default SocialMediaButton;
