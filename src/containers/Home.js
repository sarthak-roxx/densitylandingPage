import React, { useEffect, useState } from "react";
import { Grid, Button, Input, Link, Box, TextField } from "@mui/material";
import Slider from "@mui/material/Slider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Belowimage from "../images/below-coin.svg";
import Topimage from "../images/up-coin.svg";
import SmallBlock from "../images/small-block.svg";
import Globe from "../images/globe.svg";
import Saving from "../images/savings.svg";
import Progress from "../images/progress.svg";
import Money from "../images/money.svg";
import Phone from "../images/phone.svg";
import Lock from "../images/lock.svg";
import Fast from "../images/fast.svg";
import Team10 from "../images/team10.svg";
import Team11 from "../images/team11.svg";
import Team12 from "../images/team12.svg";
import Team13 from "../images/team13.svg";
import Team14 from "../images/team14.svg";
import Team15 from "../images/team15.svg";
import Team16 from "../images/team16.svg";
import Team17 from "../images/team17.svg";
import Team18 from "../images/team18.svg";
import Team19 from "../images/team19.svg";

import Vishnu from "../images/vishnu.jpeg";
import Aman from "../images/aman.svg";
import Maheedhar from "../images/Maheedhar.svg";
import DummyImage from "../images/dummy-profile.png";
import Preetish from "../images/preetish.jpeg";
import Nikhil from "../images/nikhil.jpg";
import Rushikesh from "../images/rushikesh.svg";
import RahulDhage from "../images/rahuldhage.svg";
import Aniket from "../images/aniket.svg";
import Solana from "../images/Solana.svg";
import Bitcoin from "../images/Bitcoin.svg";
import Cardano from "../images/Cardano.svg";
import Tether from "../images/Tether.svg";
import Leftmobile from "../images/leftmobile1.png";
import Rightmobile from "../images/rightmobile1.png";
import LeftCoin from "../images/coin-left.svg";
import SmallCoin from "../images/coinupsmall.svg";
import BigCoin from "../images/coinupbig.svg";
import Graph from "../images/graph.png";
import Marquee from "react-fast-marquee";

import Particles from "../images/particle.svg";
import Box1 from "../images/box1.svg";
import Box2 from "../images/box2.svg";
import Box3 from "../images/box3.svg";
import CoinHalf from "../images/halfcoin.svg";
import Circle from "../images/circle.svg";

import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Popups from "../components/Popups";
import Waitlist from "../components/Waitlist";
import Faqs from "../components/Faqs";

import Blog1 from "../images/blog1.jpg";
import Blog2 from "../images/blog2.jpg";

function valueLabelFormat(value) {
  const units = ["X", "X", "X", "X"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return 0 + value;
}

function redirectToBlog1() {
  window.location.href =
    "https://blogs.density.exchange/what-is-leverage-in-crypto-trading-how-to-profit-from-it/";
}

function redirectToBlog2() {
  window.location.href =
    "https://blogs.density.exchange/is-trading-an-art-or-a-science/";
}

// For MArks Under slider
const marksPercent = [
  {
    value: 1,
    label: "1%",
  },

  {
    value: 30,
    label: "30%",
  },
];

const marks = [
  {
    value: 1,
    label: "1x",
  },
  {
    value: 25,
    label: "25x",
  },
];

// function valuetext(value: number) {
//   return `${value}°C`;
// }

export default function Home() {
  //popup
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const [email, setemail] = useState("");
  const [error, seterror] = useState(null);
  const [open, setOpen] = React.useState(false);

  //  Validation for email check

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }

  const handleClickOpen = () => {
    // Basic required for email address

    if (email === "") {
      seterror({
        emailerror: "Please enter your email address",
      });
      return;
    }

    if (email !== "") {
      if (ValidateEmail(email)) {
        setOpen(true);
      } else {
        seterror({
          emailerror: "Please enter a valid  email address",
        });
        return;
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);
  const [wishlistCount, setwishlistCount] = React.useState(null);
  const [traderName, settraderName] = React.useState(null);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  //popoup
  const [value, setValue] = React.useState(10);
  const [newSlideValue, senewSlideValue] = useState(25);
  const [selectedBitcoin, setselectedBitcoin] = useState(null);
  const [baroneValue, setbaroneValue] = useState("20");
  const [bartwoValue, setbartwoValue] = useState("80");
  const [normalMarketReturn, setnormalMarketReturn] = useState("25%");
  const [LeverageMarketReturn, setLeverageMarketReturn] = useState(
    value * newSlideValue
  );

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      setbaroneValue(newValue * 2);
      setbartwoValue(newValue * newSlideValue);
      setnormalMarketReturn(`${newValue}%`);
      setLeverageMarketReturn(`${newValue * newSlideValue}%`);
    }
  };

  const NEWhandleChange = (event, newValue) => {
    event.preventDefault();
    senewSlideValue(newValue);
    setbartwoValue(value * newValue);
    setLeverageMarketReturn(`${newValue * value}%`);
  };

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="main" id="main">
        {/* Header Section */}

        <Header
          traderName={traderName}
          settraderName={settraderName}
          handleClickOpen1={handleClickOpen1}
          setwishlistCount={setwishlistCount}
        />
        {/* Header Section */}

        {/* Main Banner Section */}

        <Grid container alignItems="center" className="banner-sec">
          <Grid item xs={12} md={6} className="left-sec">
            <div className="left-inner">
              <h1>
                Most Advanced
                <br /> Blockchain <span>Derivatives</span>
                <br /> Ecosystem
              </h1>
              <div className="bottom-text">
                25X<span className="divider">Leverage</span>24x7
                <span className="divider">Support</span> 1Bn+{" "}
                <span>Insurance Fund</span>
                <form>
                  {/* <TextField
                    InputProps={{
                      disableUnderline: true,
                    }}
                    variant="standard"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    error={error == null ? false : true}
                    helperText={error?.emailerror}
                    placeholder="Enter your E-mail Id"
                    className="email-f"
                  /> */}

                  <Button onClick={() => openInNewTab('https://app.density.exchange')} className="join-btn">
                    Trade Now <ArrowForwardIcon />
                  </Button>
                </form>
              </div>
            </div>

            <div className="top-image">
              <img src={Topimage} />
            </div>
            <div className="below-image">
              <img src={Belowimage} />
            </div>
            <div className="small-block-image">
              <img src={SmallBlock} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="right-sec">
            <div className="right-inner">
              <div className="main-image">
                <img src={Globe} />
              </div>
              {/* <div className='big-block-image'><img src={BigBlock} /></div> */}
              {/* <div className='coin-image'><img src={Coin} /></div> */}
            </div>
          </Grid>
        </Grid>

        {/* Main Banner Section */}

        {/* Why Density Section */}

        <Grid
          container
          className="why-sec conatiner"
          spacing={5}
          align-items="center"
        >
          <Grid item xs={12} md={12} className="why-title">
            <h2>
              Why choose <span>Density ?</span>{" "}
            </h2>
          </Grid>

          <Grid item xs={12} md={4} sm={6} className="why-grid">
            <img src={Lock} />
            <b>Safe & Secured</b>
            <p>
              Excellent blue-chip shield with 2FA authentication and secured
              cold wallets. Partnered with globally renowned AML, KYC & Risk
              Management systems i.e Chainanalysis, Onfido, and Hyperverge.
            </p>
          </Grid>

          <Grid item xs={12} md={4} sm={6} className="why-grid">
            <img src={Saving} />
            <b>Lowest Trading Fee</b>
            <p>
              Best in class trading fee with maker's fee at 0.015% and the
              taker's fee at 0.030%.
            </p>
          </Grid>

          <Grid item xs={12} md={4} sm={6} className="why-grid">
            <img src={Progress} />
            <b>Leverage Maximised</b>
            <p>
              Take leverage up to 25X and increase your potential to earn more
              with less.
            </p>
          </Grid>

          <Grid item xs={12} md={4} sm={6} className="why-grid">
            <img src={Money} />
            <b>Deep Liquidity</b>
            <p>
              Our assets have the highest liquidity in the market with a tight
              bid-ask spread and a balanced order book.
            </p>
          </Grid>

          <Grid item xs={12} md={4} sm={6} className="why-grid">
            <img src={Fast} />
            <b>Fast Execution</b>
            <p>
              Low latency with lightening speed ensures quick and smooth order
              execution.
            </p>
          </Grid>

          <Grid item xs={12} md={4} sm={6} className="why-grid">
            <img src={Phone} />
            <b>24x7 Helpline</b>
            <p>
              Don’t Worry !! We are there to guide and help you throughout your
              trading journey with our 24*7 Technical Support.
            </p>
          </Grid>
        </Grid>

        <Grid
          container
          className="why-sec-btn conatiner"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={4} className="wishlist-btn"></Grid>
          <Grid item xs={12} md={4} className="wishlist-btn">
            <Button onClick={() => openInNewTab('https://app.density.exchange')}>Trade Now</Button>
          </Grid>
          <Grid item xs={12} md={4} className="wishlist-btn"></Grid>
        </Grid>

        {/* Why Density Section */}

        {/* Future Section */}

        <Grid container className="future-container" justifyContent="center">
          <Grid item xs={12} md={10} sm={10}>
            <h2>{/* Discover the <span>FUTURE</span> of Crypto */}</h2>
          </Grid>
          <Grid item xs={12} md={10} sm={10} className="video-sec">
            <iframe
              width="100%"
              height="495px"
              src="https://www.youtube.com/embed/XY9gSA0fX4E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
          <Grid
            container
            className="wishlist-row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={3} sm={5} className="wislist-inner">
              <Button onClick={() => openInNewTab('https://app.density.exchange')} className="join-waitlist">
                Trade Now
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Future Section */}

        {/* Vision Section */}

        {/* <Grid
          container
          className="vision-container"
          spacing={5}
          align-items="center"
        >
          <Grid item xs={12} md={12} className="vision-title">
            <h2>
              Our <span>Vision</span>
            </h2>
          </Grid>
          <Grid item xs={12} md={10} className="vision-sec">
            <p>
              <span>
                To bring Innovative Financial Products based on Blockchain for
                everyone on this Earth
              </span>
            </p>

            <div className="particle">
              <img src={Particles} />
            </div>
            <div className="box-1">
              <img src={Box1} />
            </div>
            <div className="box-2">
              <img src={Box2} />
            </div>
            <div className="box-3">
              <img src={Box3} />
            </div>
            <div className="coin-half">
              <img src={CoinHalf} />
            </div>
          </Grid>
        </Grid> */}

        {/* Vision Section */}

        {/* Calculate  Section */}

        <Grid container className="calculate-container">
          <Grid item xs={12} md={12}>
            <h2>
              Boost your portfolio with <span>leverage</span>
            </h2>
          </Grid>

          <Grid container className="calculate-inner" xs={12} md={10}>
            <Grid item xs={12} md={4} sm={4} className="chart-slides">
              <h5>Choose your Coin </h5>

              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
              >
                <SwiperSlide
                  sx={{
                    marginLeft: "48px",
                    width: "96px",
                  }}
                >
                  {/* <Button style={{
                    backgroundColor: isActive ? 'salmon' : '',
                    color: isActive ? 'white' : '',
                  }}
                  onClick={handleClick}> */}
                  <img src={Tether} />
                  {/* 
                  </Button> */}
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Solana} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Bitcoin} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Cardano} />
                </SwiperSlide>
              </Swiper>

              <h4>24 Hr change</h4>
              <Slider
                min={1}
                step={1}
                max={30}
                // defaultValue={50}
                value={newSlideValue}
                marks={marksPercent}
                aria-label="Default"
                className="first-slider"
                valueLabelDisplay="auto"
                onChange={NEWhandleChange}
              />

              <h3>
                Select Your <span>Leverage</span>{" "}
              </h3>
              <Slider
                value={value}
                min={1}
                step={1}
                max={25}
                scale={calculateValue}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                marks={marks}
                // disabled={selectedBitcoin == null ? true : false}
                className="second-slider"
                aria-label="Default"
              />

              {/* <Button className="calculate-returns">Calculate Return</Button> */}
            </Grid>

            <Grid item xs={12} md={8} sm={8} className="calculate-chart">
              <div
                className="css-bars"
                style={
                  {
                    // paddingTop: `${Math.round(bartwoValue / 1.5)}%`, paddingBottom: `${Math.round(bartwoValue / 1.5)}%`
                  }
                }
              >
                <div className="bar-list">
                  <div
                    className="bar one"
                    style={{
                      height: `${Math.round(newSlideValue)}px`,
                    }}
                  >
                    <div className="bar-value">
                      <span>
                        Normal market return <big>{newSlideValue + "%"}</big>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bar-list">
                  <div
                    className="bar two"
                    style={{
                      height: `${Math.round(bartwoValue / 7)}%`,
                    }}
                  >
                    <div className="bar-value">
                      <span>
                        Market Return with Leverage{" "}
                        <big>{LeverageMarketReturn}</big>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Calculate  Section */}

        {/* Trade Slider  Section */}

        <Grid
          container
          className="trade-container"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container className="trade-inner" md={12}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: false }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Grid
                  container
                  className="first-slide second-slide"
                  md={12}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid
                    container
                    className="inner-slide"
                    md={10}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item md={5} sm={5} className="title-sec">
                      <h2>
                        Amplify <span>Your Profits</span> with our{" "}
                        <span>Simple Futures</span>
                      </h2>
                    </Grid>
                    <Grid item md={7} sm={7} className="data-sec data-image">
                      <div className="graph-image">
                        <img src={Graph} />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid
                  container
                  className="first-slide"
                  md={12}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid
                    container
                    className="inner-slide"
                    md={10}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item md={5} sm={5} className="title-sec">
                      <h2>
                        Trade <span>Anytime</span> <b>Anywhere</b>
                      </h2>
                    </Grid>
                    <Grid item md={7} sm={7} className="data-sec">
                      <div className="first-mobile">
                        <img src={Leftmobile} />
                      </div>
                      <div className="second-mobile">
                        <img src={Rightmobile} />
                      </div>
                      <div className="small-coin">
                        <img src={SmallCoin} />
                      </div>
                      <div className="big-coin">
                        <img src={BigCoin} />
                      </div>
                      <div className="left-coin">
                        <img src={LeftCoin} />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>

        {/* Trade Slider  Section */}

        {/* Media  Section */}
        {/* 
        <Grid
          container
          className="media-container"
          md={12}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            className="inner-media"
            md={10}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={7} sm={5} xs={12} className="media-title">
              <h2>
                <span>Media</span>
              </h2>
            </Grid>
            <Grid item md={5} sm={7} xs={12} className="circle-sec">
              <div className="circle-image">
                <img src={Circle} />
              </div>
            </Grid>
          </Grid>
        </Grid> */}

        {/* Media  Section */}

        {/* Backend Team  Section */}

        {/* <Grid container className='backend-container' justifyContent="center" alignItems="center">
          <Grid container className='backend-inner' md={10} justifyContent="space-between"
          >

            <Grid item xs={12} md={12} className='backend-title'>
              <h2>Backed by  <span>Marquee investors and VCs</span></h2>

            </Grid>
            <Grid item xs={6} md={2} sm={4} className='backend-sec'>
              <img src={Ross} />
              <b>Ross Daniel</b><span>CFO, Bain & Co</span>
            </Grid>
            <Grid item xs={6} md={2} sm={4} className='backend-sec'>
              <img src={Tyler} />
              <b>Tyler Skiles</b><span>CFO, Bain & Co</span>
            </Grid>
            <Grid item xs={6} md={2} sm={4} className='backend-sec'>
              <img src={Darnell} />
              <b>Darnell Bruen</b><span>CFO, Bain & Co</span>
            </Grid>
            <Grid item xs={6} md={2} sm={4} className='backend-sec'>
              <img src={Ross1} />
              <b>Ross Daniel</b><span>CFO, Bain & Co</span>
            </Grid>
            <Grid item xs={6} md={2} sm={4} className='backend-sec'>
              <img src={Ryan} />
              <b>Ryan Wisozk</b><span>CFO, Bain & Co</span>
            </Grid>

            <span className='team-big'><img src={TeamBig} /></span>
            <span className='team-small'><img src={TeamSmall} /></span>

          </Grid>
        </Grid> */}
        {/* Backend Team  Section */}

        {/* CEO &  Team  Section */}

        <Grid
          container
          className="team-container"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container className="team-inner" md={12}>
            <Grid item xs={12} md={10} className="team-title">
              <h2>
                Meet Our{" "}
                <span>
                  Team of
                  <big> Experts</big>
                </span>
              </h2>
            </Grid>
            <Grid item xs={12} md={12} className="team-sec">
              {/* <div className="marquee">
                <div className="marquee--inner">
                  <span className="main-sec-team">
                    <div className="orb team">
                      <img src={Team18} />
                      <span>
                        <b>Aakash Mittal</b> CEO aka “Chief of Other” Stuff No
                        One Wants to Take Care Of
                      </span>
                    </div>
                    <div className="orb team">
                      <img src={Team10} />
                      <span>
                        <b>Bhupendra Bule</b> CTO aka Lord of Perfection
                      </span>
                    </div>
                    <div className="orb team">
                      <img src={Team11} />
                      <span>
                        <b>Deepak Vasman</b> CBO aka Lord of Multitasking
                      </span>
                    </div>
                    <div className="orb team">
                      <img src={Team19} />
                      <span>
                        <b>Anukul Jha</b>Backend Engineer aka Protector of Code
                      </span>
                    </div>
                    <div className="orb team">
                      <img src={Team16} />
                      <span>
                        <b>Tareshwar Lokhande</b>Frontend Engineer aka Man of
                        All Things Technical
                      </span>
                    </div>
                    <div className="orb team">
                      <img src={Team15} />
                      <span>
                        <b>Rishabh Shrivastav</b> Product Guy aka Viceroy of
                        Research
                      </span>
                    </div>
                    <div className="orb team">
                      <img src={Vishnu} />
                      <span>
                        <b>Vishnu Nair</b> Product Guy aka Explorer in Chief
                      </span>
                    </div>
                    <div className="orb team">
                      <img src={Team13} />
                      <span>
                        <b>Divyanshu Verma</b> Frontend Engineer aka
                        Professional Technology Manipulator
                      </span>
                    </div>
                    <div className="orb team">
                      <img src={Team14} />
                      <span>
                        <b>Poulami Chakrabarty</b>Designer aka ambassador of
                        buzz
                      </span>
                    </div> */}
              {/* <div className="orb team">
                      <img src={Team17} />
                      <span><b>Facilisis scelerisque aliquet.</b> CBO</span>
                    </div> */}
              {/* </span>
                </div>
              </div> */}
              <Marquee speed={50} pauseOnHover={true} gradient={false}>
                <div style={{ display: "flex" }}>
                  <div className="orb-team">
                    <img src={Team18} />
                    <div>
                      <h3>Aakash Mittal</h3>{" "}
                      <p>
                        CEO aka “Chief of Other” Stuff No One Wants to Take Care
                        Of
                      </p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Team10} />
                    <div>
                      <h3>Bhupendra Bule</h3> <p>CTO aka Lord of Perfection</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Team11} />
                    <div>
                      <h3>Deepak Vasman</h3>
                      <p> CBO aka Lord of Multitasking</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Team19} />
                    <div>
                      <h3>Anukul Jha</h3>
                      <p>Backend Engineer aka Protector of Code</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Team16} />
                    <div>
                      <h3>Tareshwar Lokhande</h3>
                      <p>Frontend Engineer aka Man of All Things Technical</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Team15} />
                    <div>
                      <h3>Rishabh Shrivastav</h3>
                      <p> Product Guy aka Viceroy of Research</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Vishnu} />
                    <div>
                      <h3>Vishnu Nair</h3>{" "}
                      <p>Product Guy aka Explorer in Chief</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Team13} />
                    <div>
                      <h3>Divyanshu Verma</h3>{" "}
                      <p>
                        Frontend Engineer aka Professional Technology
                        Manipulator
                      </p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Team14} />
                    <div>
                      <h3 style={{ margin: 0 }}>Poulami Chakrabarty</h3>
                      <p>Designer aka ambassador of buzz</p>
                    </div>
                  </div>
                  {/* <div className="orb team">
                      <img src={Team17} />
                      <span><b>Facilisis scelerisque aliquet.</b> CBO</span>
                    </div> */}
                </div>
              </Marquee>
            </Grid>
            <Grid item xs={12} md={12} className="team-sec">
              <Marquee
                speed={50}
                pauseOnHover={true}
                direction={"right"}
                gradient={false}
              >
                <div style={{ display: "flex" }}>
                  {/* <div className="main-sec-team"> */}
                  <div className="orb-team">
                    <img src={Team12} />
                    <div>
                      <h3>Zaine shah</h3> <p>Growth</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={RahulDhage} />
                    <div>
                      <h3>Rahul Dhage</h3>
                      <p>Content</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Team17} />
                    <div>
                      <h3>Abhishek R</h3> <p>Graphic</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Rushikesh} />
                    <div>
                      <h3>Rushikesh</h3> <p>Product</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Aniket} />
                    <div>
                      <h3>Aniket</h3> <p>Backend Developer</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Aman} />
                    <div>
                      <h3>Aman</h3> <p>Backend Developer</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Maheedhar} />
                    <div>
                      <h3>Maheedhar</h3>
                      <p>Backend Developer</p>
                    </div>
                  </div>

                  <div className="orb-team">
                    <img src={Preetish} />
                    <div>
                      <h3>Preetish</h3> <p>Software Ninjaneer</p>
                    </div>
                  </div>
                  <div className="orb-team">
                    <img src={Nikhil} />
                    <div>
                      <h3>Nikhil</h3> <p>Software Ninjaneer</p>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </Marquee>
            </Grid>
          </Grid>
        </Grid>

        {/* CEO &  Team  Section */}

        {/* Blog  Section */}

        <Grid
          container
          className="blog-container"
          md={12}
          justifyContent="center"
          id="blog"
        >
          <Grid container className="blog-title-main" md={10}>
            <Grid item xs={12} md={12} className="blog-title">
              <h1>
                <span>Density</span> Blog
              </h1>
            </Grid>
          </Grid>
          <Grid container className="blog-inner" md={10}>
            <Grid item xs={12} md={12} className="blog-sec">
              <Card onClick={redirectToBlog1} className="vertical-card">
                <span className="category">CRYPTO DERIVATIVES</span>
                <CardMedia
                  component="img"
                  image={Blog1}
                  className="blog-image"
                />
                <CardContent className="blog-content">
                  <Typography gutterBottom variant="h5" component="div">
                  Your Funds Are SAFU (Secure Asset Fund for Users)
                    <span className="date">Team Density, Nov 5, 2022</span>
                  </Typography>
                  <Typography
                    className="blog-desc"
                    variant="body2"
                    color="text.secondary"
                  >
                    Introduction: "Funds are SAFU" is a phrase that became a meme after Bizonacci, a YouTube content creator, produced a video named "Funds Are Safu" in 2018. The name of the video was a wordplay of the original phrase "Funds are safe" coined by the CEO of Binance Changpeng Zhou.
                  </Typography>
                  <Link href="https://blogs.density.exchange/your-funds-are-safu-secure-asset-fund-for-users/">
                    <span className="read-more">
                      Read more <KeyboardDoubleArrowRightIcon />
                    </span>
                  </Link>
                </CardContent>
              </Card>

              <Card onClick={redirectToBlog2} className="vertical-card">
                <span className="category">CRYPTO DERIVATIVES</span>

                <CardMedia
                  component="img"
                  image={Blog2}
                  className="blog-image"
                />
                <CardContent className="blog-content">
                  <Typography gutterBottom variant="h5" component="div">
                  What is the Funding Rate in Futures and why does it matter?
                    <span className="date">Team Density, Nov 4, 2022</span>
                  </Typography>
                  <Typography
                    className="blog-desc"
                    variant="body2"
                    color="text.secondary"
                  >
                    Periodic payments to traders that are long or short are based on the difference between perpetual contract markets and spot prices.

As these perpetual contracts never really settle, exchanges need a mechanism to ensure that future prices and index prices converge on a regular basis. This mechanism is called the funding rate.
                  </Typography>
                  <Link href="https://blogs.density.exchange/funding-rate/">
                    {" "}
                    <span className="read-more">
                      Read more <KeyboardDoubleArrowRightIcon />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Blog  Section */}

        {/* Faq  Section */}

        <Grid container className="faq-container" justifyContent="center">
          <Grid container className="footer-container" md={10}>
            <Grid item xs={12} md={12} className="faq-sec">
              <h2>
                <span>Frequently Asked Questions</span>
              </h2>
            </Grid>
          </Grid>

          <Grid container className="faq-block-container" md={10}>
            <Grid item xs={12} md={12} className="faq-block-sec">
              <Faqs />
            </Grid>
          </Grid>
        </Grid>

        {/* Faq  Section */}

        {/* Popup  Section */}

        <Popups
          open={open}
          setOpen={setOpen}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          handleClickOpen1={handleClickOpen1}
          homesetemail={setemail}
          homeemail={email}
          traderName={traderName}
          settraderName={settraderName}
          setwishlistCount={setwishlistCount}
        />

        <Waitlist
          open={open1}
          setOpen={setOpen1}
          handleClickOpen={handleClickOpen1}
          handleClose={handleClose1}
          wishlistCount={wishlistCount}
          traderName={traderName}
        />

        {/* Popup  Section */}

        {/* Footer  Section */}

        <Footer />
        {/* Footer  Section */}
      </div>
    </>
  );
}
