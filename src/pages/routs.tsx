import { ADDRESS, NEWS } from "../constants/routs";
import Address from "./Address";
import News from "./News";

type TRoute = {
  path: string;
  element: JSX.Element
};

export const publicRoutes: TRoute[] = [
  {
    path: NEWS,
    element: <News />,
  },
  {
    path: ADDRESS,
    element: <Address />,
  },
];
