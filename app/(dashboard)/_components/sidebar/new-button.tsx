"use client";

import Hint from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import React from "react";
import { GrAdd } from "react-icons/gr";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={13}
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-75 hover:opacity-100 transition">
              <GrAdd size={24} className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>

      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
