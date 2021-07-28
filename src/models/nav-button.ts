import { ButtonProps } from "@material-ui/core";
import { NavLinkProps } from "react-router-dom";

type NavButtonItem = NavLinkProps & ButtonProps;

export interface NavButtonsProps {
  items: NavButtonItem | ReadonlyArray<NavButtonItem>;
}
