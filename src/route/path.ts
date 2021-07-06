type WithRootPath = <Type, Keys extends string & keyof Type>(
  subPaths: Type,
  rootPathKey?: typeof RootPath[keyof typeof RootPath]
) => { [K in Keys]: string };

const withRootPath: WithRootPath = (
  subPaths,
  rootPathKey = RootPath.Protected
) => {
  return Object.entries(subPaths).reduce((acc, [key, value]) => {
    return { ...acc, [key]: `${rootPathKey}${value}` };
  }, {} as any);
};

export const RootPath = {
  Protected: "/!",
  SignIn: "/sign-in",
  SignUp: "/sign-up",
  SignOut: "/sign-out",
} as const;

export const ProtectedSubPath = withRootPath({
  User: `/user`,
  Home: `/home`,
} as const);
