"use client";

import React from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import SideBarMenuItem from "./SideBarMenuItem";
import useRoutes from "@/hook/useRoutes";
import { useSelector } from "react-redux";
import { selectSidebarOpen } from "../libs/redux/counter/sidebarSlice";

const SideBarMenu = () => {
  const routes = useRoutes();
  const isSidebarOpen = useSelector(selectSidebarOpen);

  return (
    <div
      className={`absolute ${
        isSidebarOpen
          ? "w-32 sm:mt-0 sm:h-full sm:w-[40%] sm:relative"
          : "w-0 overflow-hidden"
      } mt-[130px] h-[81%] bg-white flex flex-col gap-8 duration-300 shadow-xl z-10`}
    >
      <div className="flex gap-2 h-[10%] items-center pl-2">
        <div>
          <BsMenuButtonWide size={20} className="text-orange-400" />
        </div>
        <h4 className="font-bold text-xl">
          Menu <span className="flex bg-orange-400 w-[70%] h-1 rounded-full" />
        </h4>
      </div>

      <div className="h-full flex flex-col gap-7">
        {routes.map((item) => (
          <SideBarMenuItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={item.active}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBarMenu;
