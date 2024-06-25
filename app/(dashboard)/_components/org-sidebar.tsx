"use client";
import React from "react";

import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const OrgSidebar = () => {
  const searchParams = useSearchParams();

  const favorites = searchParams.get("favorites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href={"/"}>
        <div className="flex items-center gap-x-2 justify-center ">
          <Image alt="logo" src={"/logo1.svg"} width={30} height={30} />
          <span
            className={cn(
              "font-semibold text-2xl bg-gradient-to-r from-[#7C1DFE] via-[#d7a610] to-[#27dba8] text-transparent bg-clip-text",
              font.className
            )}
          >
            Scrawls
          </span>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />

      <div className="space-y-1 w-full">
        <Button
          asChild
          variant={favorites ? "ghost" : "secondary"}
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href={"/"}>
            <LuLayoutDashboard size={24} className="h-4 w-4 mr-2" />
            Team Boards
          </Link>
        </Button>

        <Button
          asChild
          variant={favorites ? "secondary" : "ghost"}
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
          >
            <FaRegStar size={24} className="h-4 w-4 mr-2" />
            Favourite Boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSidebar;
