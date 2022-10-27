import LOADER from "../../images/spinner.svg";
import "./Loader.scss";

import React from "react";

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={LOADER} alt="Загрузка..."/>
    </div>
  );
}
