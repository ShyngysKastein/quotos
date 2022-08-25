import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import CategoryLink from "./CategoryLink/CategoryLink";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="header_link">
          <h1>Quotes Central</h1>
        </NavLink>
        <NavLink to="/quotes" className="header_link">
          Quotes
        </NavLink>
        <NavLink to="/add-quote" className="header_link">
          Submit new quote
        </NavLink>
      </header>
      <menu className="block">
        <div className="block_category">
          <CategoryLink />
        </div>
        <div className="block_inner">
          <Outlet />
        </div>
      </menu>
    </>
  );
};

export default Layout;
