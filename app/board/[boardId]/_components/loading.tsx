import { Loader } from "lucide-react";
import React from "react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./partcipants";
import { ToolbarSkeleton } from "./toolbar";

const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />

      <InfoSkeleton />

      <ParticipantsSkeleton />

      <ToolbarSkeleton />
    </main>
  );
};

export default Loading;
