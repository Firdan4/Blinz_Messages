import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string;
  width?: number;
  height?: number;
}

const Avatar = ({ src, height, width }: AvatarProps) => {
  return (
    <div>
      <div className="border relative overflow-hidden border-orange-400 rounded-full w-12 h-12 align-middle">
        {/* image disini */}
        <Image
          alt="avatar"
          src={src || "/images/avatar.png"}
          width={width || 100}
          height={height || 100}
        />
      </div>
    </div>
  );
};

export default Avatar;
