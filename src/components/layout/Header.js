import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Tdsfdsfdsfdodoist" />
        </div>
        <div className="settings">
          <ul>
            <li data-testid="settings__add" className="settings__add">
              +
            </li>
            <li data-testid="settings__darkmode" className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
