import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        alt="Loading-Image"
        src="/logo1.svg"
        width={90}
        height={90}
        className="animate-pulse !duration-[3000]"
      />
    </div>
  );
};

export default Loading;
