import React from "react";
import { IconType } from "react-icons";

interface SocialMediaButtonProps {
  icon: IconType;
  onClick: () => void;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center w-full cursor-pointer"
    >
      <div className="shadow rounded-full w-full hover:shadow-md bg-gray-100">
        <Icon className="mx-auto" size={"30px"} />
      </div>
    </div>
  );
};

export default SocialMediaButton;
