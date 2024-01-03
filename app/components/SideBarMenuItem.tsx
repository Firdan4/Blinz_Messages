import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib/esm";

interface sideBarMenuItemProps {
  label: string;
  href: string;
  active?: boolean;
  icon: IconType;
  onClick?: () => void;
}

const SideBarMenuItem: React.FC<sideBarMenuItemProps> = ({
  href,
  icon: Icon,
  label,
  active,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className="flex gap-2 items-center pl-2"
      onClick={onClick}
    >
      <div>
        <Icon size={20} className="text-orange-400" />
      </div>
      <h4 className="font-medium text-base">
        {label}
        <span
          className={`flex bg-orange-400 h-[2px] duration-300 rounded-full ${
            active ? "w-[100%]" : "w-0"
          }`}
        ></span>
      </h4>
    </Link>
  );
};

export default SideBarMenuItem;
