type WithRootPath = <Type>(
  subPaths: Type,
  rootPathKey: string
) => { [K in keyof Type]: string };

export const withRootPath: WithRootPath = (subPaths, rootPathKey) => {
  return Object.entries(subPaths).reduce((acc, [key, value]) => {
    return { ...acc, [key]: `${rootPathKey}${value}` };
  }, {} as any);
};
