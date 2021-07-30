import { useCallback, useEffect, useRef } from "react";
import { useVirtual } from "react-virtual";
import { useUsers } from "hooks/useUser";

export const ReactVirtual = () => {
  const users = useUsers();

  const parentRef = useRef(null);

  const rowVirtualizer = useVirtual({
    size: users.total,
    parentRef,
    estimateSize: useCallback(() => 100, []),
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.virtualItems].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= (users.data?.length ?? 0)) {
      users.fetchNextPage();
    }
  }, [rowVirtualizer.virtualItems, users]);

  return (
    <div
      ref={parentRef}
      className="List"
      style={{
        height: `500px`,
        width: `100%`,
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          const isLoaderRow = virtualRow.index > (users.data?.length ?? 0) - 1;
          const user = users.data?.[virtualRow.index];

          return (
            <div
              key={virtualRow.index}
              className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {isLoaderRow
                ? users.hasNextPage
                  ? "Loading more..."
                  : "Nothing more to load"
                : user?.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
