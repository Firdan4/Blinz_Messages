import MessageList from "@/app/(auth)/components/messages/MessageList";
import Header from "@/app/components/Header";
import React from "react";

const messageData = [
  {
    name: "Heru Fridan",
    status: "Online",
    message: "Apa kabar kamu di sana?",
  },
  {
    name: "Randy Akbar",
    status: "Offline",
    message: "Saya lagi otw kampus nih bro!",
  },
  {
    name: "Bagasta Lefandi",
    status: "Online",
    message: "Apa tugas mu udah selesai??",
  },
];

const Messages = () => {
  return (
    <div className="h-full w-full">
      <Header label="Messages" />
      <div className="flex flex-col gap-5 w-full h-full px-5 py-5">
        {messageData.map((item) => (
          <MessageList
            key={item.name}
            message={item.message}
            name={item.name}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
