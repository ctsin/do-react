import { withRootPath } from "utilities/withRootPath";

export const RootPath = {
  Protected: "/!",
  SignIn: "/sign-in",
  SignUp: "/sign-up",
  SignOut: "/sign-out",
} as const;

export const ProtectedSubPath = withRootPath(
  {
    User: `/user`,
    Home: `/home`,
  } as const,
  RootPath.Protected
);
