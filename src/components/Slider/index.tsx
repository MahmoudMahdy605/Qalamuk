"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import localFont from "next/font/local"
import '../../styles/global.css'
import backImage from '../images/abdulrhman-alkhnaifer-I4B-IZ7cd-g-unsplash.jpg'

import image1 from '../../images/scott-graham-OQMZwNd3ThU-unsplash.jpg'
import image2 from '../../images/levi-meir-clancy-ruWf1KGPPsY-unsplash.jpg'
import image3 from '../../images/godwin-bephin-CcMBS9CtPhw-unsplash.jpg'
import image4 from '../../images/rishab-lamichhane--jIc0pEIQhA-unsplash.jpg'
import image5 from '../../images/mostafa-meraji-YACrNE-CSJk-unsplash.jpg'
import image6 from '../../images/face-cover.jpg'
const myFont = localFont({src: '../../fonts/GEDinkum-Bold-1.ttf'})
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'نفخر بشراكتنا المستمرة مع عدد من الجهات الحكومية، ومساهمتنا في تقريب خدماتهم من المستفيدين وتقديم حلول تواصل ذكية',
    imgPath: image5.src
  },
  {
    label: 'ندرك حاجة القطاع الخاص إلى التواصل الدائم مع العملاء؛ لذلك نقدم لهم منتجات مبتكرة تحقق أهدافهم',
    imgPath: image2.src
      
  },
  {
    label: ' محمد بيه القحطاني نصنع محتوى للشخصيات البارزة ورجال الأعمال بما يحقق لهم الظهور الإعلامي المميز والتفاعل المؤثر، والتوثيق المثمر للأعمال والمنجزات.',
    imgPath: image3.src
  },
  {
    label: 'نصنع محتوى للشخصيات البارزة ورجال الأعمال بما يحقق لهم الظهور الإعلامي المميز والتفاعل المؤثر، والتوثيق المثمر للأعمال والمنجزات.',
    imgPath: image4.src
  },
  {
    label: 'ندرك حاجة القطاع الخاص إلى التواصل الدائم مع العملاء؛ لذلك نقدم لهم منتجات مبتكرة تحقق أهدافهم',
    imgPath: image1.src  },
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
      <Box sx={{  flexGrow: 1, display: 'block',
       flexDirection: 'column', justifyContent: 'center', paddingLeft:20, paddingRight: 20,  
         }} 
       
       >
  
        
         
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={10000}
          >
            {images.map((step, index) => (
                <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                    <Box sx={{display: 'flex', alignItems: 'center' , justifyContent: 'space-between' ,}}>
  
                    <Box
                      component="img"
                      className ='sliderImage'
                      sx={{
                        height: 500,
                        // display: 'block',
                        // maxWidth: 600,
                        overflow: 'hidden',
                        // width: 600,
                        borderRadius: 10,
                        // marginTop: 7,
                        ":hover":{
                          // border: "5px #16B0D4 solid ",
                          opacity: 0.8, 
                          // transition: '0.5 ease',
                          transitionDuration: '200ms',
                          boxShadow: '0 0 3px'
                        }
                      }}
                      src={step.imgPath}
                      alt={step.label}
  
                      />
                  <Paper
                    square
                    elevation={0}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      // height: 50,
                      pl: 2,
                      bgcolor: 'background.default',
                    }}
                    >
                    <Typography style={myFont.style} color={'#16B0D4'} maxWidth={350} textAlign={'right'}  >
                      <p style={myFont.style} className='desc' >قَلَمُك </p>
                      {images[activeStep].label}
                      {/* <h1>2015 </h1> */}
                      
                    </Typography>
                  </Paper>
                </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        <MobileStepper
          
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {/* Next */}
              {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                  ) : (
                  <KeyboardArrowLeft />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
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
}

export default Slider