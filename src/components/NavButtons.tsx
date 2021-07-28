import { FC } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { NavButtonsProps } from "models/nav-button";

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

export const NavButtons: FC<NavButtonsProps> = ({
  items: itemObjectOrArray,
}) => {
  const classes = useStyles();

  const items = Array.isArray(itemObjectOrArray)
    ? itemObjectOrArray
    : Array.of(itemObjectOrArray);

  return (
    <>
      {items.map((props, idx) => (
        <Button
          key={idx.toString()}
          activeClassName={classes.active}
          component={NavLink}
          color="inherit"
          {...props}
        />
      ))}
    </>
  );
};
