import { rest } from "msw";
import faker from "faker";

import { API } from "constants/API";
import { Users } from "models/user";
import { SearchParams } from "constants/searchParams";
import { PageParamInitial, PageSize } from "constants/infiniteQuery";

const makeUsers: (length: number) => Users = (length = PageSize) =>
  Array.from({ length }, () => ({
    name: faker.name.findName(),
  }));

export const handlers = [
  rest.get(API.User, ({ url: { searchParams } }, res, ctx) => {
    const totalPages = 3;
    const users = makeUsers(PageSize);
    const page = +(searchParams.get(SearchParams.Page) ?? PageParamInitial);
    const nextPage = page < totalPages - 1 ? page + 1 : undefined;

    return res(
      ctx.status(200),
      ctx.json({
        users,
        nextPage,
        total: totalPages * PageSize,
      })
    );
  }),
];
