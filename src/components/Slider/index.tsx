"use client";
import * as React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import localFont from "next/font/local";
import "../../style/global.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessIcon from "@mui/icons-material/Business";
import { Link, useMediaQuery } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import mobile1 from "../../images/mobileSlide1.jpg";
import mobile2 from "../../images/mobileSlide2.jpg";
import mobile3 from "../../images/mobileSlide3.jpg";

const myFont = localFont({ src: "../../fonts/GEDinkum-Bold-1.ttf" });
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: image3.src,
    mobImagePath: mobile1.src,
  },
  {
    imgPath: image1.src,
    mobImagePath: mobile2.src,
  },
  {
    imgPath: image2.src,
    mobImagePath: mobile3.src,
  },
];
const Slider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:850px)");
  const isBigScreen = useMediaQuery("(min-width:1900px)");


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        className: "slides",
        flexGrow: 1,
        display: "block",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        marginTop: isMobile ? "60px" : "0px",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={10000}
      >
        {images.map((step, index) => (
          <div key={`slider-${index}`}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  className="sliderImage"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: isMobile ? "550px" : isBigScreen? "857px" : "89.5vh",

                  }}
                  src={isMobile ? step.mobImagePath : step.imgPath}
                />
                {index === 0 && (
                  <>
                    <Button
                      className="slideButton"
                      style={myFont.style}
                      sx={{
                        position: "absolute",
                        bottom: { md: "2%" },
                        right: isMobile || isTablet ? "6%" : "10%",
                        top: isMobile ? "70%" : isMobile || isTablet ? "90%" : "",
                        borderRadius: 10,
                        backgroundColor: "orange",
                        color: "white",
                        fontSize: isTablet ? 15 : 20,
                        width: isTablet? '20vh' : '30vh',
                        ":hover": {
                          backgroundColor: "#16B0D4",
                          transform: "translateY(-3px)",
                          transition: "0.3s",
                        },
                      }}
                    >
                      <TypeAnimation
                          preRenderFirstString={true}
                          sequence={[
                            500,
                            ' ..تعرف على قَلَمُك', 
                            1000,
                            '',
                          ]}
                          speed={50}
                          repeat={Infinity}
                          />
                    </Button>
                    <Box
                      position={"absolute"}
                      color={"white"}
                      justifyContent={"space-between"}
                      display={"flex"}
                      sx={{
                        flexDirection: isMobile ? "column" : "",
                        position: "absolute",
                        borderRadius: "0 4px 0 0",
                        left: "0%",
                        right: isMobile ? "-15% " : "35%",
                        bottom: "0%",
                        top: isMobile ? "80% " : "90%",
                        background: isMobile
                          ? ""
                          : `linear-gradient(to top, ${
                              theme.palette.primary.main
                            }, ${alpha(theme.palette.primary.main, 0.4)})`,
                        p: "25px",
                      }}
                    >
                      <Box
                        className="firstLine"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                        fontSize={isTablet? 10 : 15}
                        fontWeight={600}
                      >
                        <Link href="#" underline="hover" color={"white"}>
                          {" "}
                          تعرف على خدمات قَلَمُك في السنوات الأخيرة{" "}
                        </Link>
                        <NotificationsIcon
                          sx={{
                            display: "inline-block",
                          }}
                        />
                      </Box>
                      <Box
                        className="secondLine"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                        fontSize={isTablet? 10 : 15}
                        fontWeight={600}
                      >
                        <Link href="#" underline="hover" color={"white"}>
                          {" "}
                          تعرف على أهم انجازاتنا في السنوات الأخيرة{" "}
                        </Link>
                        <BusinessIcon />
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper                                      //for the arrows
        sx={(theme) => ({
          display: isMobile? 'none' : '',
          flexDirection: "row-reverse",
          position: 'absolute',
          top: '50%',
          width: '100%',
          color: 'white',
          backgroundColor:'rgba(0,0,0,0)',
          "& .MuiMobileStepper-dot ": {
            borderRadius: 25,
            width: 25,
            height: 8,
            display: 'none',
          },
          "& .MuiButtonBase-root ":{
            backgroundColor:'darkgray'
          }
        })}
        steps={maxSteps}
        position="static"
        activeStep={maxSteps - activeStep - 1}
        nextButton={
          <Button
            sx={{ display: "block", color: 'white',
            ":hover": {
              backgroundColor: "orange",
              transform: "translateY(-2px)",
              transition: "0.3s",
            },
          }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight />
            {/* Next */}
            {/* {theme.direction === "rtl" ? (
            ) : (
              <KeyboardArrowLeft />
            )} */}
          </Button>
        }
        backButton={
          <Button
            sx={{ display: "block", color: 'white',
            ":hover": {
              backgroundColor: "orange",
              transform: "translateY(-2px)",
              transition: "0.3s",
            },
          }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            {/* {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )} */}
          </Button>
        }
      />
      <MobileStepper                                                        // for the dots
        sx={(theme) => ({
          // flexDirection: "row-reverse",
          backgroundColor:'rgba(0,0,0,0)',
          position: isMobile? '' : 'absolute',
          right: '50%',
          justifyContent: isMobile?'center': '',
          top: '96%',

          "& .MuiMobileStepper-dot ": {
            borderRadius: 25,
            width: 25,
            height: 8,
          },
          "& .MuiMobileStepper-dotActive":{
            backgroundColor: isMobile? '#16B0D4' : 'orange'
          }
        })}
        steps={maxSteps}
        position="static"
        activeStep={maxSteps - activeStep - 1}
        nextButton={
          <Button
            sx={{ display: "none" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight />
            {/* Next */}
            {/* {theme.direction === "rtl" ? (
            ) : (
              <KeyboardArrowLeft />
            )} */}
          </Button>
        }
        backButton={
          <Button
            sx={{ display: "none" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            {/* {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )} */}
          </Button>
        }
      />
    </Box>
  );
};

export default Slider;
