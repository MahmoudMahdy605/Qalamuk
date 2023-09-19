import React from 'react'
// import image1 from "../../images/linkedin-cover.jpg";
import image1 from "../../images/web-cover.png";
import { Avatar, Box, } from '@mui/material';
const SlideShow = () => {
    return (
      
      <Box sx={{ width: '100%', display:'flex', alignItems: 'center',  }} >
            <Box  component="img"
                      className ='sliderImage'
                      sx={{
                        height: 620,
                        width: "100%",
                        // display: 'block',
                        // maxWidth: 600,
                        // overflow: 'hidden',
                        // width: 600,
                        // borderRadius: 10,
                        marginTop: 238,
                        // marginBottom: 10,
                        // zIndex: 1
                      }}
                      src={image1.src}
                // src={image1.src}
              />
        </Box >
      )
    }

export default SlideShow





















// **********************************************************************************************************

//for background image

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



// **********************************************************************************************************

// display text when hover


// import React from "react";
// import image1 from "../../images/web-cover.png";

// function SlideShow() {
// 	return (
// 		<div className="wrapper">
//       <div className="topImage">
//         <img src={image1.src}  />
//         <div className="content">
//           <h1> image hover effect</h1>
//           <p> trial for hover effect</p>

//         </div>
//       </div>
//     </div>
// 	);
// }

// export default SlideShow;


