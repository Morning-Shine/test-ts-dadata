import { ADDRESS } from "./routs";

type TPageHeader = {
  [name: string]: { title: string; subtitle: string };
};

export const PAGE_HEADERS: TPageHeader = {
  "/": {
    title: "Новости",
    subtitle: "Обновление CRM до 1.2",
  },
  [ADDRESS]: {
    title: "Поиск адресов",
    subtitle: "Введите интересующий вас адрес",
  },
};
