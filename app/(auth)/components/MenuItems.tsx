import React from "react";
import { IconType } from "react-icons/lib/esm";

interface MenuItemProps {
  label: string;
  iconMenu: IconType;
}

const MenuItems: React.FC<MenuItemProps> = ({ iconMenu: IconMenu, label }) => {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <IconMenu size={20} className="text-orange-500" />
      </div>
      <label className="font-semibold text-lg">
        {/* {label} */}
        <span className="flex h-[2px] w-[80%] rounded-full"></span>
      </label>
    </div>
  );
};

export default MenuItems;
