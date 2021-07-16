import { InfiniteLoader, List } from "react-virtualized";
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
    return (
      <div style={style} key={key}>
        {users.data?.[index]?.name ?? "LOADING"}
      </div>
    );
  };

  return (
    <Grid container spacing={0}>
      <Grid item>
        <Paper>
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={users.total}
          >
            {({ onRowsRendered, registerChild }) => {
              return (
                <List
                  ref={registerChild}
                  onRowsRendered={onRowsRendered}
                  rowRenderer={rowRenderer}
                  height={100}
                  rowHeight={22}
                  rowCount={users.total}
                  width={200}
                />
              );
            }}
          </InfiniteLoader>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <InfiniteScroll
            loader={<h4>Loading...</h4>}
            height={100}
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
    </Grid>
  );
};
