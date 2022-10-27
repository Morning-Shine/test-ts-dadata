import "./SideMenu.scss";
import React from "react";
import { MENU_ITEMS } from "../../constants/menuItems";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
  return (
    <aside className="main-menu-side">
      <h2>Меню</h2>
      {MENU_ITEMS.map((item) => (
        <SideMenuItem
          key={item.icon}
          icon={item.icon}
          title={item.title}
          link={item.link}
          children={item.children}
        />
      ))}
    </aside>
  );
}
