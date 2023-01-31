import React from "react";
import { Grid, Button, Input, Link, Box, Typography } from "@mui/material";
import FooterLogo from "../images/footerlogo.svg";
import Twitter from "../images/twitter.svg";
import Telegram from "../images/telegram.svg";
import Youtube from "../images/youtube.svg";
import Call from "../images/call.svg";
import Email from "../images/email.svg";
import Goto from "../images/goto.svg";
import Whatsapp from "../images/whatsapp.svg";
import Mail from "../images/Mail.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Policies/PrivacyPolicy";
const Mailto = ({ email, subject, body, children }) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}`}
    >
      {children}
    </a>
  );
};

const openInNewTab1 = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const openInNewTab2 = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function Footer() {
  return (
    <>
      <div>
        <Grid container className="footer">
          <Grid container className="footer-container" md={10}>
            <Grid item xs={12} md={10} sm={9}>
              <img src={FooterLogo} className="footer-logo" />
              <br />
              <div className="img-box">
                <img src={Call} />
                <span>+91 9035092634</span>
              </div>
              <div className="img-box">
                <img src={Email} />
                <span>hello@density.exchange</span>
              </div>
              <div className="footer-social">
                {/* <Link href="#" underline="none"><img src={FB} /></Link> */}
                <Link
                  href="https://www.linkedin.com/company/densityexchange/"
                  underline="none"
                >
                  {" "}
                  <LinkedInIcon sx={{ color: "white", marginRight: "15px" }} />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UC6AatLn11dFqudMrIT5meNQ/featured"
                  underline="none"
                >
                  {" "}
                  <img src={Youtube} />
                </Link>
                <Link href="https://t.me/+cmwN5TlBccs4YWU1" underline="none">
                  {" "}
                  <img src={Telegram} />
                </Link>
                <Link
                  href="https://twitter.com/densityexchange"
                  underline="none"
                >
                  <img src={Twitter} />
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} md={2} sm={3}>
              <div className="whatsapp-btn-sec">
                <span>Get in Touch</span>
                <Button className="whatsapp-btn">
                  <Link
                    href="https://api.whatsapp.com/send?phone=919035092634&text=Hi!%20I%27m%20interested%20in%20Density"
                    underline="none"
                  >
                    <Typography sx={{ color: "black" }}>
                      Connect Whatsapp
                    </Typography>{" "}
                  </Link>
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} md={10} className="bottom-footer">
            <span>© 2022-2022, All Rights Reserved</span> <br />
            <NavLink
              style={{ textDecoration: "none" }}
              className="navbar-item"
              activeClassName="is-active"
              to="privacypolicy"
              exact
            >
              <Button
                className="try-demo-button"
                sx={{
                  color: "#ebff25",
                  textDecoration: "none",
                  fontFamily: "Overpass",
                  textTransform: "none",
                }}
              >
                Privacy policy
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              className="navbar-item"
              activeClassName="is-active"
              to="tradingpolicy"
              exact
            >
              <Button
                className="try-demo-button"
                sx={{
                  color: "#ebff25",
                  textDecoration: "none",
                  fontFamily: "Overpass",
                  textTransform: "none",
                }}
              >
                Trading Policy
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              className="navbar-item"
              activeClassName="is-active"
              to="amlpolicy"
              exact
            >
              <Button
                className="try-demo-button"
                sx={{
                  color: "#ebff25",
                  textDecoration: "none",
                  fontFamily: "Overpass",
                  textTransform: "none",
                }}
              >
                AML Policy
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              className="navbar-item"
              activeClassName="is-active"
              to="cookiepolicy"
              exact
            >
              <Button
                className="try-demo-button"
                sx={{
                  color: "#ebff25",
                  textDecoration: "none",
                  fontFamily: "Overpass",
                  textTransform: "none",
                }}
              >
                Cookie Policy
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              className="navbar-item"
              activeClassName="is-active"
              to="termandconditions"
              exact
            >
              <Button
                className="try-demo-button"
                sx={{
                  color: "#ebff25",
                  textDecoration: "none",
                  fontFamily: "Overpass",
                  textTransform: "none",
                }}
              >
                Terms and conditions
              </Button>
            </NavLink>
          </Grid>
        </Grid>
        <div className="goto-btn">
          <Link
            href="https://api.whatsapp.com/send?phone=919035092634&text=Hi!%20I%27m%20interested%20in%20Density"
            underline="none"
          >
            {" "}
            <img src={Whatsapp} />
          </Link>
          <Mailto email="hello@density.exchange" subject="Subject:" body="Hi!">
            <img src={Mail} />
          </Mailto>
          <Link href="#" underline="none">
            {" "}
            <img src={Goto} />
          </Link>
        </div>
      </div>
    </>
  );
}
