"use client";
import * as React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import localFont from "next/font/local";
import "../../style/global.css";
import backImage from "../images/abdulrhman-alkhnaifer-I4B-IZ7cd-g-unsplash.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessIcon from "@mui/icons-material/Business";
import Link from "@mui/joy/Link";

import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";

const myFont = localFont({ src: "../../fonts/GEDinkum-Bold-1.ttf" });
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label:
      "نفخر بشراكتنا المستمرة مع عدد من الجهات الحكومية، ومساهمتنا في تقريب خدماتهم من المستفيدين وتقديم حلول تواصل ذكية",
    imgPath: image3.src,
  },
  {
    label:
      "ندرك حاجة القطاع الخاص إلى التواصل الدائم مع العملاء؛ لذلك نقدم لهم منتجات مبتكرة تحقق أهدافهم",
    imgPath: image1.src,
  },
  {
    label:
      " محمد بيه القحطاني نصنع محتوى للشخصيات البارزة ورجال الأعمال بما يحقق لهم الظهور الإعلامي المميز والتفاعل المؤثر، والتوثيق المثمر للأعمال والمنجزات.",
    imgPath: image2.src,
  },
];
const Slider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
        flexGrow: 1,
        display: "block",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
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
          <div key={step.label}>
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
                  }}
                  src={step.imgPath}
                />
                {/*  adding a button and links to the first slide */}
                {index === 0 && (
                  <>
                    <Button
                      className="slideButton"
                      style={myFont.style}
                      sx={{
                        position: "absolute",
                        bottom: "2%",
                        right: "10%",
                        borderRadius: 10,
                        backgroundColor: "orange",
                        color: "white",
                        fontSize: 20,
                        ":hover": {
                          backgroundColor: "#16B0D4",
                          transform: "translateY(-7px)",
                          transition: "0.3s",
                        },
                      }}
                    >
                      تعرف على قَلَمُك
                    </Button>
                    <Box
                      position={"absolute"}
                      color={"white"}
                      justifyContent={"space-between"}
                      display={"flex"}
                      sx={{
                        position: "absolute",
                        borderRadius: "4px",
                        left: "0%",
                        right: "35%",
                        bottom: "0%",
                        top: "90%",
                        backgroundColor: alpha(theme.palette.primary.main, 0.6),
                        p: 1,
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
                        fontSize={20}
                        fontWeight={600}
                      >
                        <p> تعرف على خدمات قَلَمُك في السنوات الأخيرة</p>
                        <NotificationsIcon
                          sx={{
                            display: "inline-block",
                            color: theme.palette.secondary.main,
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
                        fontSize={20}
                        fontWeight={600}
                      >
                        <p> تعرف على أهم انجازاتنا في السنوات الأخيرة </p>
                        <BusinessIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </Box>
                    </Box>
                  </>
                )}
                <Paper
                  square
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // height: 50,
                    // pl: 2,
                    bgcolor: "background.default",
                  }}
                >
                  {/* <Typography style={myFont.style} color={'#16B0D4'} maxWidth={350} textAlign={'right'}  >
                      <p style={myFont.style} className='desc' >قَلَمُك </p>
                      {images[activeStep].label}                      
                    </Typography> */}
                </Paper>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        // sx={{ flexDirection: "column" }}
        sx={(theme) => ({
          flexDirection: "column",

          "& .MuiMobileStepper-dot ": {
            borderRadius: 25,
            width: 25,
            height: 8,
          },
        })}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ display: "none" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {/* Next */}
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ display: "none" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
            {/* Back */}
          </Button>
        }
      />
    </Box>
  );
};

export default Slider;
