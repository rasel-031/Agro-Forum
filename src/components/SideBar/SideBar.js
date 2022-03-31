import React, { useState } from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Profile from "../../images/profile.png";
import { HiOutlineHome } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { CgList } from "react-icons/cg";
import ReactTooltip from "react-tooltip";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { logoutUserSuccess } from "../../redux/user/userActions";

const SideBar = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUserSuccess());
  };

  return (
    <>
      <div className="sidebar-container">
        <img className="sidebar-logo" src={Logo} alt="logo" />
        <div className="sidebar-nav-link-box">
          <div data-tip="Home">
            <Link
              to=""
              className={isActive === "home" ? "link-active" : "link-inactive"}
              onClick={() => setIsActive("home")}
            >
              <HiOutlineHome className="link-icon" />
            </Link>
          </div>
          <div data-tip="Notifications">
            <Link
              to="notifications"
              className={
                isActive === "notifications" ? "link-active" : "link-inactive"
              }
              onClick={() => setIsActive("notifications")}
            >
              <RiNotification2Line className="link-icon" />
            </Link>
          </div>
          <div data-tip="Lists">
            <Link
              to="lists"
              className={isActive === "lists" ? "link-active" : "link-inactive"}
              onClick={() => setIsActive("lists")}
            >
              <CgList className="link-icon" />
            </Link>
          </div>
          <div data-tip="Write">
            <Link
              to="new-post"
              className={
                isActive === "new-post" ? "link-active" : "link-inactive"
              }
              onClick={() => setIsActive("new-post")}
            >
              <BsPencilSquare className="link-icon" />
            </Link>
          </div>
        </div>
        <ReactTooltip place="right" type="info" effect="solid" />

        <img
          className="sidebar-profile-pic"
          src={Profile}
          alt="profile"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* profile card */}
      {isOpen && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpen(false);
          }}
        >
          <div className="sidebar-profile-container">
            <Link to="my-profile" className="profile-link">
              My Profile
            </Link>
            <Link to="settings" className="profile-link">
              Settings
            </Link>
            <Link to="" className="profile-link" onClick={handleLogout}>
              Sign out
            </Link>
            <div className="profile-horizontal">
              <hr />
            </div>
            <div className="profile-box">
              <img src={Profile} alt="" className="profile-pic" />
              <div className="profile-text">
                <h5>Rasel Bishwas</h5>
                <p>@raselbishwas</p>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      )}
    </>
  );
};

export default SideBar;
