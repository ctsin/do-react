import { Route, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";

import { Header } from "./../module/Header";
import { protectedRouteProps } from "route/protectedRouteProps";

export const Protected = () => {
  return (
    <Box>
      <Header />
      <Switch>
        {protectedRouteProps.map((props, idx) => (
          <Route key={idx} {...props} />
        ))}
      </Switch>
    </Box>
  );
};
