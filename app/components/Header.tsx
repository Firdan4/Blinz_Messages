"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../libs/redux/counter/sidebarSlice";
import Avatar from "./Avatar";

interface HeaderProps {
  label: string;
  hiddenSearch?: boolean;
}

const Header = ({ label, hiddenSearch }: HeaderProps) => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="text-white bg-green-400 h-[130px] rounded-br-[3.5rem]">
      <div className="h-full flex flex-col justify-center gap-3">
        <div className="px-5 flex justify-between items-center">
          <button onClick={() => handleToggleSidebar()}>
            <FaBarsStaggered size={30} className="text-white" />
          </button>
          <h1 className="font-bold text-2xl">{label}</h1>
          <Avatar src="/images/avatar.png" />
        </div>
        {!hiddenSearch && (
          <div className="w-full flex items-center justify-center">
            <div className="flex justify-between items-center p-1 text-gray-500 w-[80%] rounded-full bg-gray-100 px-2">
              <p className="text-xs lowercase">Search for {label}</p>
              <div>
                <FaSearch size={18} className="text-orange-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
