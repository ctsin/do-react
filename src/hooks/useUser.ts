import { useEffect, useState } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";

import { API } from "constants/API";
import { PageParamInitial } from "constants/infiniteQuery";
import { ReactQueryKeys } from "constants/reactQueryKeys";
import { SearchParams } from "constants/searchParams";
import { Users } from "models/user";

type Page = {
  users: Users;
  nextPage?: number;
  total: number;
  pageSize: number;
};

const DEFAULT_TOTAL_USERS = 0;

export const useUsers = () => {
  const [users, setUsers] = useState<Users | undefined>();
  const [total, setTotal] = useState<number>(DEFAULT_TOTAL_USERS);

  const controller = new AbortController();
  const signal = controller.signal;
  const fetchUsers = ({
    pageParam = PageParamInitial,
  }: {
    pageParam?: Page["nextPage"];
  }): Promise<Page> =>
    fetch(`${API.User}?${SearchParams.Page}=${pageParam}`, { signal }).then(
      (res) => res.json()
    );

  const query = useInfiniteQuery(ReactQueryKeys.Users, fetchUsers, {
    getNextPageParam(data: Page) {
      const { nextPage } = data;

      return nextPage;
    },
    refetchOnWindowFocus: false,
  });

  fetchUsers.cancel = () => controller.abort();

  const queryClient = useQueryClient();

  useEffect(() => {
    setUsers(
      query.data?.pages.reduce(
        (result, page) => [...result, ...page.users],
        [] as Users
      )
    );
    return () => {
      queryClient.cancelQueries(ReactQueryKeys.Users);
    };
  }, [query.data?.pages, queryClient]);

  useEffect(() => {
    setTotal(query.data?.pages[0].total ?? DEFAULT_TOTAL_USERS);
    return () => {
      queryClient.cancelQueries(ReactQueryKeys.Users);
    };
  }, [query.data?.pages, queryClient]);

  return {
    data: users,
    total,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage,
  };
};
