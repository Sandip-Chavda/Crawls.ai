"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useApiMutation } from "@/hooks/use-api-mutation";
import toast from "react-hot-toast";

const EmptyBoards = () => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;
    mutate({
      title: "Untitled",
      orgId: organization.id,
    })
      .then((id) => {
        router.push(`/board/${id}`);
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/note.svg"}
        alt="empty-boards-image"
        height={150}
        width={150}
        className=""
      />

      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>

      <div className="mt-6">
        <Button
          className="disabled:cursor-not-allowed"
          disabled={pending}
          onClick={onClick}
          size="lg"
        >
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
