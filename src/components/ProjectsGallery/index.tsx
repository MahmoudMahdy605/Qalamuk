"use client";
import * as React from 'react';
import localFont from "next/font/local";
import { useState } from 'react';
import ReactFlow, { Background } from 'reactflow';

import galleryImage from '../../../public/images/gallery.png'
const myFont = localFont({ src: "../../fonts/GEDinkum-Bold-1.ttf" });

import {
    Box,
    Container,
    Typography,
    Link,
    Grid,
    useTheme,
    Button,
  } from "@mui/material";
  export const ProjectsGallery = () => {
    const theme = useTheme();
    return (
         <Box sx={{backgroundColor :'#1eabe3', height: '50vh', backgroundImage: galleryImage, borderRadius: '10px'}} width={'90%'} marginLeft={'5%'} marginRight={'5%'} display={'flex'} flexDirection={'column'} alignItems={'center'} >
         <Typography style={myFont.style} sx={{fontSize: '3rem', color: 'white' } }> أَعمَالُنا السَابقة </Typography>

            <Box
                  component="img"
                  className="sliderImage"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",

                  }}
                  src={galleryImage.src}
                />
                <Button
                      style={myFont.style}
                      sx={{
                        // position: "absolute",
                        borderRadius: 10,
                        backgroundColor: "white !important",
                        color: "orange",
                        fontSize:  20,
                        marginBottom: '5px',
                        // width: '30vh',
                        ":hover": {
                          backgroundColor: "#EEEEEE",
                          transform: "translateY(-3px)",
                          transition: "0.3s",
                        },
                      }}
                    >
                            تَعَرَف عَلَى أَعمَالِنا 
                </Button>
                    

      </Box> 
    );
  };
  
  export default ProjectsGallery;
  