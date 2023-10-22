import React from "react";
import { IconType } from "react-icons";

interface SocialMediaButtonProps {
  icon: IconType;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon: Icon,
}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="shadow rounded-full w-full hover:shadow-md bg-gray-100">
        <Icon className="mx-auto" size={"30px"} />
      </div>
    </div>
  );
};

export default SocialMediaButton;
