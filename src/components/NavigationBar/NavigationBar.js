import React, { useState } from "react";
import "./NavigationBar.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import SignIn from "../Authentication/SignIn/SignIn";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OutsideClickHandler from "react-outside-click-handler";
import SignUp from "../Authentication/SignUp/SignUp";

const NavigationBar = () => {
  //hooks write here
  const [IsActive, setIsActive] = useState(false);

  //custom functions

  //material ui
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-heading-box">
            <img src={logo} alt="logo.jpg" className="navbar-heading-image" />
            <h2 className="navbar-heading-text">Agro Forum</h2>
          </div>
          <div className="navbar-right-content-box">
            <Link to="our-story" className="navbar-link">
              Our Story
            </Link>
            <Link to="membership" className="navbar-link">
              Membership
            </Link>
            <Link to="write" className="navbar-link">
              Write
            </Link>
            <span onClick={() => setIsActive(true)}>Sign In</span>
            <button onClick={() => setIsActive(true)}>Get Started</button>
          </div>
        </div>
      </div>

      {/* authentication works */}

      {IsActive && (
        <div className="navbar-authentication-container">
          <OutsideClickHandler
            onOutsideClick={() => {
              setIsActive(false);
            }}
          >
            <Box
              sx={{
                typography: "body1",
                background: "white",
                padding: "5px 25px",
                width: "350px",
              }}
            >
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                  }}
                >
                  <TabList onChange={handleChange}>
                    <Tab label="Sign In" value="1" />
                    <Tab label="Sign Up" value="2" />
                  </TabList>
                </Box>
                <TabPanel
                  value="1"
                  sx={{
                    padding: "12px 0px",
                  }}
                >
                  <SignIn />
                </TabPanel>
                <TabPanel
                  value="2"
                  sx={{
                    padding: "12px 0px",
                  }}
                >
                  <SignUp />
                </TabPanel>
              </TabContext>
            </Box>
          </OutsideClickHandler>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
