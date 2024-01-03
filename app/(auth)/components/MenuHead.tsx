import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";

interface menuHeadItem {
  label: string;
}

const MenuHead: React.FC<menuHeadItem> = ({ label }) => {
  return (
    <div className="flex items-center gap-1 justify-center h-20 border rounded-br-3xl bg-green-400 w-full">
      <div>
        <LuLayoutDashboard size={28} className="text-white font-bold" />
      </div>
      <h2 className="relative text-2xl font-semibold text-white">
        {label}
        <span className="flex h-[2px] w-[80%] rounded-full"></span>
      </h2>
    </div>
  );
};

export default MenuHead;
