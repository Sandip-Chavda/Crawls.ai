"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useMutation, useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types/canvas";
import React, { memo } from "react";
import { ColorPicker } from "./color-picker";
import { useDeleteLayers } from "@/hooks/use-delete-layers";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { RiBringToFront } from "react-icons/ri";
import { RiSendToBack } from "react-icons/ri";
import { Trash2 } from "lucide-react";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const moveToBack = useMutation(
      ({ storage }) => {
        const liveLayersIds = storage.get("layerIds");

        const indices: number[] = [];

        const arr = liveLayersIds.toArray();

        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = 0; i < indices.length; i++) {
          liveLayersIds.move(indices[i], i);
        }
      },
      [selection]
    );

    const moveToFront = useMutation(
      ({ storage }) => {
        const liveLayersIds = storage.get("layerIds");

        const indices: number[] = [];

        const arr = liveLayersIds.toArray();

        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayersIds.move(
            indices[i],
            arr.length - 1 - (indices.length - 1 - i)
          );
        }
      },
      [selection]
    );

    const setFill = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((id) => {
          liveLayers.get(id)?.set("fill", fill);
        });
      },
      [selection, setLastUsedColor]
    );

    const deleteLayers = useDeleteLayers();

    const selectionBounds = useSelectionBounds();

    if (!selectionBounds) return null;

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(
        calc(${x}px - 50%),
        calc(${y - 16}px - 100%)
        )`,
        }}
      >
        {/* Color Picker pallete */}
        <ColorPicker onChange={setFill} />

        {/* Layer Bring to Front & Send to Back  */}
        <div className="flex flex-col gap-y-0.5">
          <Hint label="Bring to front">
            <Button
              size="icon"
              variant="board"
              className=""
              onClick={moveToFront}
            >
              <RiBringToFront size={24} />
            </Button>
          </Hint>

          <Hint label="Send to back">
            <Button
              size="icon"
              variant="board"
              className=""
              onClick={moveToBack}
            >
              <RiSendToBack size={24} />
            </Button>
          </Hint>
        </div>

        {/* Delete Button */}
        <div className="flex items-center pl-2 ml-2 border-l border-neutral-200">
          <Hint label="Delete Layer">
            <Button
              variant="board"
              size="icon"
              className="bg-red-600 hover:bg-red-700 text-white hover:text-white"
              onClick={deleteLayers}
            >
              <Trash2 />
            </Button>
          </Hint>
        </div>
      </div>
    );
  }
);

SelectionTools.displayName = "SelectionTools";

export default SelectionTools;
