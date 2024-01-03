import Avatar from "@/app/components/Avatar";
import React from "react";

import { FaEllipsis } from "react-icons/fa6";

interface MessageListProps {
  name: string;
  status: string;
  message: string;
}

const MessageList = ({ message, name, status }: MessageListProps) => {
  return (
    <div className="border-b border-gray-400 py-1 flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <div className="flex gap-2 w-full">
          <Avatar src="/images/avatar.png" />
          {/* <Avatar placeholder={"Avatar"} /> */}
          <div className="flex flex-col items-start justify-center w-full">
            <div className=" flex items-center justify-between w-full">
              <div className="font-bold max-w-[70%] overflow-hidden whitespace-nowrap">
                <span className="truncate block">{name} </span>
              </div>
              <div className="w-[20%] flex items-start justify-end">
                <FaEllipsis size={20} className="text-gray-700" />
              </div>
            </div>

            <span className="text-xs text-green-400">{status}</span>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden whitespace-nowrap pl-1 pr-5">
        <span className="truncate block text-xs text-gray-700">{message}</span>
      </div>
    </div>
  );
};

export default MessageList;
