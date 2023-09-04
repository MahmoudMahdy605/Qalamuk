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

const myFont = localFont({src: '../../fonts/GEDinkum-Bold-1.ttf'})
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'نفخر بشراكتنا المستمرة مع عدد من الجهات الحكومية، ومساهمتنا في تقريب خدماتهم من المستفيدين وتقديم حلول تواصل ذكية',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'ندرك حاجة القطاع الخاص إلى التواصل الدائم مع العملاء؛ لذلك نقدم لهم منتجات مبتكرة تحقق أهدافهم',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: ' محمد بيه القحطاني نصنع محتوى للشخصيات البارزة ورجال الأعمال بما يحقق لهم الظهور الإعلامي المميز والتفاعل المؤثر، والتوثيق المثمر للأعمال والمنجزات.',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'نصنع محتوى للشخصيات البارزة ورجال الأعمال بما يحقق لهم الظهور الإعلامي المميز والتفاعل المؤثر، والتوثيق المثمر للأعمال والمنجزات.',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
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
      <Box sx={{  flexGrow: 1, display: 'flex',
       flexDirection: 'column', justifyContent: 'center', padding:20,
       backgroundColor:'blue_gradient', }}  >
  
        
         
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box sx={{display: 'flex', alignItems: 'center' , justifyContent: 'space-between' ,}}>
  
                    <Box
                      component="img"
                      sx={{
                        height: 400,
                        // display: 'block',
                        // maxWidth: 600,
                        overflow: 'hidden',
                        // width: 600,
                        borderRadius: 10,
                        marginTop: 7,
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
                    <Typography style={myFont.style} color={'#16B0D4'} maxWidth={350} textAlign={'right'} >
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