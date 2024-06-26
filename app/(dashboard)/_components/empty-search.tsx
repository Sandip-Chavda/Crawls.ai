import Image from "next/image";
import React from "react";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-search.svg"}
        alt="empty-search-image"
        height={200}
        width={200}
        className=""
      />

      <h2 className="text-2xl font-semibold mt-6">No Search Founds</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};

export default EmptySearch;
