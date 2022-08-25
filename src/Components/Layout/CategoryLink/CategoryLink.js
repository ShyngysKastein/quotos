import React from "react";
import "./CategoryLink.css";
import { NavLink, useLocation, useParams } from "react-router-dom";

const CategoryLink = () => {
  const location = useLocation();
  const { category } = useParams();

  return location.pathname === "/add-quote" ||
    location.pathname === `/quotes/${category}/edit` ? null : (
    <div className="menu">
      <NavLink
        to="/"
        className={() => {
          return location.pathname === "/" || location.pathname === "/quotes"
            ? "header_link active"
            : "header_link";
        }}
      >
        All
      </NavLink>
      <NavLink
        to="/quotes/star-wars"
        className={() => {
          return location.pathname === "/quotes/star-wars"
            ? "header_link active"
            : "header_link";
        }}
      >
        Star Wars
      </NavLink>
      <NavLink
        to="/quotes/famous-people"
        className={() => {
          return location.pathname === "/quotes/famous-people"
            ? "header_link active"
            : "header_link";
        }}
      >
        Famous people
      </NavLink>
      <NavLink
        to="/quotes/saying"
        className={() => {
          return location.pathname === "/quotes/saying"
            ? "header_link active"
            : "header_link";
        }}
      >
        Saying
      </NavLink>
      <NavLink
        to="/quotes/humour"
        className={() => {
          return location.pathname === "/quotes/humour"
            ? "header_link active"
            : "header_link";
        }}
      >
        Humour
      </NavLink>
      <NavLink
        to="/quotes/motivation"
        className={() => {
          return location.pathname === "/quotes/motivation"
            ? "header_link active"
            : "header_link";
        }}
      >
        Motivation
      </NavLink>
    </div>
  );
};

export default CategoryLink;
