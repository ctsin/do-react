import { RouteProps } from "react-router-dom";

import { RootPath } from "routes/path";

import { Protected } from "screens/Protected";
import { SignIn } from "screens/SignIn";
import { SignOut } from "screens/SignOut";
import { SignUp } from "screens/SignUp";

export const rootRouteProps: RouteProps[] = [
  { path: RootPath.Protected, component: Protected },
  { path: RootPath.SignIn, component: SignIn },
  { path: RootPath.SignOut, component: SignOut },
  { path: RootPath.SignUp, component: SignUp },
];
