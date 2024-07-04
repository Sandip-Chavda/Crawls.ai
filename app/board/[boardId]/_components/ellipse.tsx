import { colorToCssColor } from "@/lib/utils";
import { ElipseLayer } from "@/types/canvas";
import React from "react";

interface EllipseProps {
  id: string;
  layer: ElipseLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const Ellipse = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: EllipseProps) => {
  return (
    <ellipse
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${layer.x}px, ${layer.y}px)`,
      }}
      cx={layer.width / 2}
      cy={layer.height / 2}
      rx={layer.width / 2}
      ry={layer.height / 2}
      fill={layer.fill ? colorToCssColor(layer.fill) : "#000"}
      stroke={selectionColor || "transparent"}
      strokeWidth="2"
    />
  );
};

export default Ellipse;
