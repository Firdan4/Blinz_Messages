import Image from "next/image";
import React from "react";

function AuthHeader() {
  return (
    <div>
      <Image
        src={"/images/blinz.png"}
        alt="logo blinz"
        className="w-[200px] mx-auto"
        width={100}
        height={100}
      />
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
        Welcome to messages
      </h2>
    </div>
  );
}

export default AuthHeader;
