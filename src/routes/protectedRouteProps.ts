import { RouteProps } from "react-router-dom";

import { ProtectedSubPath } from "routes/path";

import { ReactVirtual } from "screens/Home";
import { User } from "screens/User";

export const protectedRouteProps: RouteProps[] = [
  { path: ProtectedSubPath.ReactVirtual, component: ReactVirtual },
  { path: ProtectedSubPath.User, component: User },
];
