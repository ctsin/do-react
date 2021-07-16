import { withRootPath } from "utilities/withRootPath";

type NODE_ENV = NodeJS.ProcessEnv["NODE_ENV"];
type APIBaseProps = Partial<{ [K in NODE_ENV]: string }>;

const APIRoots: APIBaseProps = {
  development: "/v1",
  production: "https://www.some.com",
} as const;

const development: NODE_ENV = "development";
const APIRoot = APIRoots[process.env.NODE_ENV ?? development]!;

export const API = withRootPath(
  {
    User: `/user`,
    Home: `/home`,
  } as const,
  APIRoot
);
console.log("调试 ~ file: API.ts ~ line 21 ~ API", API);
