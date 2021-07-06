import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { RootPath, ProtectedSubPath } from "route/path";
import { NavButton } from "component/NavButton";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          News
        </Typography>
        <NavButton to={RootPath.SignOut}>Sign Out</NavButton>
        <NavButton to={ProtectedSubPath.Home}>Home</NavButton>
        <NavButton to={ProtectedSubPath.User}>User</NavButton>
      </Toolbar>
    </AppBar>
  );
};
