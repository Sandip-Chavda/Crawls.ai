"use client";

import { Actions } from "@/components/actions";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSaperator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to Boards" side="bottom" sideOffset={13} align="center">
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image
              src="/logo1.svg"
              alt="Crawls logo"
              height={40}
              width={40}
              className=""
            />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              Crawls
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSaperator />
      <Hint label="Rename Title" side="bottom" sideOffset={13} align="center">
        <Button
          variant="board"
          onClick={() => onOpen(data._id, data.title)}
          className="text-base font-medium px-2"
        >
          {data.title}
        </Button>
      </Hint>
      <TabSaperator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={13}>
        <div>
          <Hint label="Menu" side="bottom" sideOffset={13} align="center">
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};

export default Info;
