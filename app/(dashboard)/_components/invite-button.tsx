import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import React from "react";
import { GrAdd } from "react-icons/gr";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Hint label="Invite Members"> */}
        <Button variant="outline">
          <GrAdd size={24} className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
        {/* </Hint> */}
      </DialogTrigger>

      <DialogContent className="p-0 bg-transparent border-none max-w-[880px] h-screen ">
        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
