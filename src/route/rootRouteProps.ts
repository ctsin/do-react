import { RouteProps } from "react-router-dom";

import { RootPath } from "route/path";

import { Protected } from "screen/Protected";
import { SignIn } from "screen/SignIn";
import { SignOut } from "screen/SignOut";
import { SignUp } from "screen/SignUp";

export const rootRouteProps: RouteProps[] = [
  { path: RootPath.Protected, component: Protected },
  { path: RootPath.SignIn, component: SignIn },
  { path: RootPath.SignOut, component: SignOut },
  { path: RootPath.SignUp, component: SignUp },
];
