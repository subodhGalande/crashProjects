import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function RowComponent({ names }) {
  const parentRef = React.useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: names.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  return (
    <>
      <div
        ref={parentRef}
        classname="List"
        style={{
          height: `200px`,
          width: `400px`,
          overflow: "auto",
        }}
      >
        <div>
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const name = names[virtualRow.index];
              return (
                <div
                  key={virtualRow.index}
                  className={
                    virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"
                  }
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
