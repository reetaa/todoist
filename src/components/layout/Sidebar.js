import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";
import { Projects } from "../Projects";
import { AddProject } from "../AddProject";
import { useSelectedProjectValue } from "../../context";

export const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          data-testid="today"
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          data-testid="next_7"
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
        <div
          className="sidebar__midle"
          onClick={() => setShowProjects(!showProjects)}
        >
          <span>
            <FaChevronDown
              className={!showProjects ? "hidden-projects" : undefined}
            />
            <h2>Projects</h2>
          </span>
        </div>
      </ul>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
