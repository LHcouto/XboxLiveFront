import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { RoutePath } from "types/routes";

export const navigationItems: NavItem[] = [
  {
    icon: <Home />,
    path: RoutePath.HOMEPAGE,
  },
];
