import React from "react";
import { Grid, Button, Input, Link, Box } from "@mui/material";
import Logo from "../images/logo.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Popups from "../components/Popups";

export default function Header({
  traderName,
  settraderName,
  handleClickOpen1,
  setwishlistCount,
}) {
  //popup

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenTryDemo = () => {
    return <></>;
  };

  const handleClose = () => {
    setOpen(false);
  };

  //popoup
  //  const [open1, setOpen1] = React.useState(false);

  //  const handleClickOpen1 = () => {
  //    setOpen1(true);
  //  };

  //  const handleClose1 = () => {
  //    setOpen1(false);
  //  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div>
        <Grid container alignItems="center" className="header-sec">
          <Grid item lg={3} xs={5}>
            <img src={Logo} className="main-logo" />
            <a
              href="https://shorthaired-twist-38b.notion.site/T-Cs-for-the-Density-Futures-trading-Competition-0704be0da1d446f2a34cdc83fea81468"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <span className="blink">Trading competition</span>
            </a>
          </Grid>
          <Grid item lg={6} xs={4} className="menu">
            <a
              href="https://densityexchange.freshdesk.com/support/home"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <span className="support menu-link">Support</span>
            </a>
            <a href="#blog" style={{ textDecoration: "none", color: "black" }}>
              <span href="#blog" className="blog menu-link">
                Blog
              </span>
            </a>
          </Grid>
          <Grid item lg={3} xs={3}>
            {/* <Button className="try-demo-button"
          sx={{ float: "right",
          background: "#ebff25",
          color: "black",
          height: "42px",
          fontFamily: "Overpass",
          fontSize: "10px",
          fontWeight: "600",
          padding: "0px 5px" }} 
          onClick={() => openInNewTab('https://demo.density.exchange')}>
            Try demo 
          </Button> */}
            <Button
              onClick={() => openInNewTab("https://app.density.exchange")}
              className="join-btn-header"
            >
              Trade Now
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>

        <Popups
          open={open}
          setOpen={setOpen}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          handleClickOpen1={handleClickOpen1}
          setwishlistCount={setwishlistCount}
          traderName={traderName}
          settraderName={settraderName}
        />
      </div>
    </>
  );
}
