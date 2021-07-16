import { RouteProps } from "react-router-dom";

import { ProtectedSubPath } from "routes/path";

import { Home } from "screens/Home";
import { User } from "screens/User";

export const protectedRouteProps: RouteProps[] = [
  { path: ProtectedSubPath.Home, component: Home },
  { path: ProtectedSubPath.User, component: User },
];
