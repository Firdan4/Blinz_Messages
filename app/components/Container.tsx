import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

interface ContainerPorps {
  label: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerPorps> = ({ label, children }) => {
  return <div className=" w-full h-full bg-gray-100 sm:flex">{children}</div>;
};

export default Container;
