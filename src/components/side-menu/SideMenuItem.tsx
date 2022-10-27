import "./SideMenuItem.scss";
import React, { useState } from "react";
import { IMenuItem } from "../../constants/menuItems";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function SideMenuItem({
  title,
  icon,
  link,
  children,
}: IMenuItem) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const location = useLocation();
  /**если нужны дочерние элементы */
  const isPopUp = !!children && !!children.length ? true : false;
  let popUp = null;
  if (isPopUp) {
    // @ts-ignore (проверено выше)
    popUp = children.map((child, index) => {
      const innerData = (
        <>
          <img src={child.icon} alt={child.title} />
          <h4>{child.title}</h4>
        </>
      );
      return (
        <div className="main-menu-item" key={`${index}${child.icon}`}>
          {child.link ? <Link to={child.link}>{innerData}</Link> : innerData}
        </div>
      );
    });
  }

  return (
    <div className="main-menu-item">
      {isPopUp ? (
        <>
          <div
            className="empty-link"
            onClick={() => setIsOpenPopup(!isOpenPopup)}
          >
            <img src={icon} alt={title} />
            <div className={`arrow ${isOpenPopup ? "arrow-up" : "arrow-down"}`}>
              <h4>{title}</h4>
            </div>
          </div>
          {isPopUp && (
            <div className="children-container" hidden={!isOpenPopup}>
              {popUp}
            </div>
          )}
        </>
      ) : (
        <Link
          to={link || "/"}
          className={link === location.pathname ? "active" : ""}
        >
          <img src={icon} alt={title} />
          <h4>{title}</h4>
        </Link>
      )}
    </div>
  );
}
