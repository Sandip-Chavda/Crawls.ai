import React from "react";

const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>eraser</div>
        <div>scale</div>
        <div>scale</div>
      </div>
      <div className="bg-white rounded-md flex flex-col items-center p-1.5 shadow-md">
        <div className="">Undo</div>
        <div className="">Redo</div>
      </div>
    </div>
  );
};

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md"/>
  );
};

export default Toolbar;