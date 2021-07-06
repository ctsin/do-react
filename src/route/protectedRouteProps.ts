import { RouteProps } from "react-router-dom";

import { ProtectedSubPath } from "route/path";

import { Home } from "screen/Home";
import { User } from "screen/User";

export const protectedRouteProps: RouteProps[] = [
  { path: ProtectedSubPath.Home, component: Home },
  { path: ProtectedSubPath.User, component: User },
];
