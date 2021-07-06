import { FC } from "react";
import { Button, ButtonProps, makeStyles } from "@material-ui/core";
import { NavLink, NavLinkProps } from "react-router-dom";

const useStyles = makeStyles(
  ({
    palette: {
      secondary: { main },
    },
  }) => ({
    active: {
      color: main,
    },
  })
);

export const NavButton: FC<NavLinkProps & ButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <Button
      activeClassName={classes.active}
      component={NavLink}
      color="inherit"
      {...props}
    />
  );
};
