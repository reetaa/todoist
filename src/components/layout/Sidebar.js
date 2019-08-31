import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";
import { Tasks } from "../Tasks";

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 days</span>
      </li>
      <div className="sidebar__midle">
        <span>
          <FaChevronDown />
          <h2>Projects</h2>
        </span>
      </div>
    </ul>
    <ul className="sidebar__projects">Projects will be here!</ul>
    Add Project component here
    <Tasks />
  </div>
);
