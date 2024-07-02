import React from "react";
import ToolButton from "./tool-button";
import {
  Circle,
  Pencil,
  Redo2,
  Square,
  SquareMousePointer,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";

const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Select"
          icon={SquareMousePointer}
          onClick={() => {}}
          isActive={false}
          // isDisabled={false}
        />
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() => {}}
          isActive={false}
          // isDisabled={false}
        />
        <ToolButton
          label="Sticky note"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
          // isDisabled={false}
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => {}}
          isActive={false}
          // isDisabled={false}
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => {}}
          isActive={false}
          // isDisabled={false}
        />
        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() => {}}
          isActive={false}
          // isDisabled={false}
        />
      </div>
      <div className="bg-white rounded-md flex flex-col items-center p-1.5 shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={() => {}}
          // isActive={false}
          isDisabled={true}
        />
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={() => {}}
          // isActive={false}
          isDisabled={true}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md" />
  );
};

export default Toolbar;
