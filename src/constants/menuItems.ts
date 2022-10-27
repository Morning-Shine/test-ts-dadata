import IMG_HOME from "../images/icons/home.svg";
import IMG_SEARCH from "../images/icons/search.svg";
import IMG_TABLES from "../images/icons/tables.svg";
import IMG_CALENDAR from "../images/icons/calendar.svg";
import IMG_LOCATION from "../images/icons/location.svg";
import IMG_WIDGETS from "../images/icons/widgets.svg";
import IMG_SETTINGS from "../images/icons/settings.svg";
import IMG_EXIT from "../images/icons/exit.svg";
import IMG_USER from "../images/icons/user.svg";
import IMG_FINANCES from "../images/icons/finances.svg";


export interface IMenuItem {
        title: string,
        icon: string,
        link: string|null,
        children?: IMenuItem[]
    }


export const MENU_ITEMS: IMenuItem[] = [
  {
    title: "Главная",
    icon: IMG_HOME,
    link: "/",
  },
  {
    title: "Поиск адресов",
    icon: IMG_SEARCH,
    link: "/address",
  },
  {
    title: "Таблицы",
    icon: IMG_TABLES,
    link: "",
  },
  {
    title: "Календарь",
    icon: IMG_CALENDAR,
    link: "",
  },
  {
    title: "Карты",
    icon: IMG_LOCATION,
    link: "",
  },
  {
    title: "Виджеты",
    icon: IMG_WIDGETS,
    link: "",
  },
  {
    title: "Настройки",
    icon: IMG_SETTINGS,
    link: "",
    children: [
      { title: "Настройки профиля", icon: IMG_USER, link: "" },
      { title: "Управление финансами", icon: IMG_FINANCES, link: "" },
    ],
  },
  {
    title: "Выход",
    icon: IMG_EXIT,
    link: "",
  },
];
