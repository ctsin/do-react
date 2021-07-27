import {
  AutoSizer,
  InfiniteLoader,
  List,
  WindowScroller,
} from "react-virtualized";
import InfiniteScroll from "react-infinite-scroll-component";
import { useUsers } from "hooks/useUser";
import { Grid, Paper } from "@material-ui/core";
import type { ListProps, InfiniteLoaderProps } from "react-virtualized";

export const User = () => {
  const users = useUsers();

  const dataLength = users.data?.length ?? 0;

  const isRowLoaded: InfiniteLoaderProps["isRowLoaded"] = ({ index }) => {
    return !!users.data?.[index];
  };

  const loadMoreRows: InfiniteLoaderProps["loadMoreRows"] = () => {
    return users.fetchNextPage();
  };

  const rowRenderer: ListProps["rowRenderer"] = ({ index, style, key }) => {
    const loaded = isRowLoaded({ index });

    return (
      <div style={style} key={key}>
        {loaded ? users.data?.[index]?.name : "Loading"}
      </div>
    );
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Paper style={{ height: 600 }}>
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={users.total}
            threshold={1}
          >
            {({ onRowsRendered, registerChild }) => {
              return (
                <AutoSizer>
                  {({ height, width }) => (
                    <List
                      ref={registerChild}
                      noRowsRenderer={() => <div>NOTHING</div>}
                      onRowsRendered={onRowsRendered}
                      rowRenderer={rowRenderer}
                      height={height}
                      rowHeight={22}
                      rowCount={users.total}
                      width={width}
                    />
                  )}
                </AutoSizer>
              );
            }}
          </InfiniteLoader>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <InfiniteScroll
            loader={<h4>Loading...</h4>}
            height={600}
            next={users.fetchNextPage}
            dataLength={dataLength}
            hasMore={!!users.hasNextPage}
          >
            {users.data?.map(({ name }, idx) => (
              <div key={idx.toString()}>{name}</div>
            ))}
          </InfiniteScroll>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <WindowScroller>
          {({
            height,
            isScrolling,
            registerChild,
            onChildScroll,
            scrollTop,
          }) => (
            <AutoSizer disableHeight>
              {({ width }) => (
                <div ref={registerChild}>
                  <List
                    autoHeight
                    className="list"
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    overscanRowCount={3}
                    rowCount={users.data?.length ?? 0}
                    rowHeight={30}
                    rowRenderer={rowRenderer}
                    scrollTop={scrollTop}
                    width={width}
                  />
                </div>
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      </Grid>
    </Grid>
  );
};
