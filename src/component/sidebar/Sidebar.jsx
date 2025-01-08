import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PaidIcon from "@mui/icons-material/Paid";
import EmailIcon from "@mui/icons-material/Email";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ChatIcon from "@mui/icons-material/Chat";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";

import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/userList" className="link">
              <li className="sidebarListItem ">
                <AccountCircleIcon className="sidebarIcon" />
                Users
              </li>
            </Link>

            <li className="sidebarListItem">
              <ProductionQuantityLimitsIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <PaidIcon className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <EmailIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageAccountsRoundedIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <AnalyticsRoundedIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportRoundedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
