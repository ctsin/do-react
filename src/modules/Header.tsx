import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { RootPath, ProtectedSubPath } from "routes/path";
import { NavButtons } from "components/NavButtons";
import { NavButtonsProps } from "models/nav-button";

const navButtonItems: NavButtonsProps["items"] = [
  { children: "Sign Out", to: RootPath.SignOut },
  { children: "React-Virtual", to: ProtectedSubPath.ReactVirtual },
  { children: "User", to: ProtectedSubPath.User },
];

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

        <NavButtons items={navButtonItems} />
      </Toolbar>
    </AppBar>
  );
};
