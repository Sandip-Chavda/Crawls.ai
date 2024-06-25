"use client";

import Hint from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return null;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={13}>
        <Image
          fill
          className={cn(
            "rounded-md cursor-pointer opacity-50 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
          src={imageUrl}
          alt={name}
          onClick={onClick}
        />
      </Hint>
    </div>
  );
};

export default Item;
