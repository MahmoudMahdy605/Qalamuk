import React from 'react'
import image1 from "../../images/linkedin-cover.jpg";
import { Avatar, Box, } from '@mui/material';
const SlideShow = () => {
    return (
      
      <Box sx={{ width: '100%', display:'flex', alignItems: 'center',  }} >
            <Box  component="img"
                      className ='sliderImage'
                      sx={{
                        height: 400,
                        width: "100%",
                        // display: 'block',
                        // maxWidth: 600,
                        // overflow: 'hidden',
                        // width: 600,
                        // borderRadius: 10,
                        marginTop: 65,
                        marginBottom: 10,
                        // zIndex: 1
                      }}
                      src={image1.src}
                // src={image1.src}
              />
        </Box >
      )
    }

export default SlideShow




//for backgroun image

// import React, { Component } from 'react';
// import image1 from '../../images/face-cover.jpg';
// import { Box } from '@mui/material';
// function SlideShow() {
//     console.log(image1)
//     return (
//       <Box sx={{ backgroundImage: `url(${image1.src})`, backgroundColor: 'red' , height: '40%', opacity: '0.3'}}>
//       </Box>
//     );
//   }

// export default SlideShow;
