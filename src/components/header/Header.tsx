import React from "react";
import "./Header.scss";
import IMG_TOOLS from "../../images/icons/tools.svg";
import UserInfo from "../../components/user-info/UserInfo";


export default function Header() {
  return (
    <header className="header">
      <section className="company-logo">
        <img src={IMG_TOOLS} alt="логотип компании" />
        <h1 >Wrench CRM</h1>
      </section>
      <UserInfo name="Мария" surname="Кононец"/>
    </header>
  );
}
