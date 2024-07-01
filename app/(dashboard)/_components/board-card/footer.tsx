import Hint from "@/components/hint";
import { cn } from "@/lib/utils";
import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

interface FooterProps {
  isfavorite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  onClick,
  disabled,
  isfavorite,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    onClick();
  };

  return (
    <div className="relative bg-white p-3 ">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel},{createdAtLabel}
      </p>
      <Hint
        label={isfavorite ? "Remove From Favorite" : "Add to Favorite"}
        side="top"
      >
        <button
          disabled={disabled}
          onClick={handleClick}
          className={cn(
            "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
            disabled && "cursor-not-allowed opacity-75"
          )}
        >
          {isfavorite ? (
            <IoMdStar size={24} className="w-4 h-4 text-blue-600" />
          ) : (
            <IoIosStarOutline size={24} className="w-4 h-4" />
          )}
        </button>
      </Hint>
    </div>
  );
};

export default Footer;
