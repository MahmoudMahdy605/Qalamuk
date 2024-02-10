"use client";
import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { Grid } from "@mui/joy";
import img1 from "../../images/proj1.jpg";
import img2 from "../../images/proj2.jpg";
import img3 from "../../images/proj3.jpg";
import img4 from "../../images/proj4.jpg";
import img5 from "../../images/proj5.jpg";
import img6 from "../../images/proj6.jpg";
import img8 from "../../images/girlWithPhone.png";
import background1 from "../../images/background1.png";
import localFont from "next/font/local";
import { URL } from "url";

const myFont = localFont({ src: "../../fonts/GEDinkum-Bold-1.ttf" });

const projects = [
  {
    id: "1",
    name: "شركة تيسلا",
    description:
      " منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية",
    projectImage: img1.src,
  },
  {
    id: "2",
    name: "شركة مرسيدس",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img2.src,
  },
  {
    id: "3",
    name: "شركة الطب الحديث",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img3.src,
  },
  {
    id: "4",
    name: "شركة المراعي",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img4.src,
  },
  {
    id: "5",
    name: "شركة جهينة",
    description:
      " منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية",
    projectImage: img5.src,
  },
  {
    id: "6",
    name: "شركة الجزيرة",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img6.src,
  },
  {
    id: "6",
    name: "شركة الجزيرة",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img6.src,
  },
  {
    id: "6",
    name: "شركة الجزيرة",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img6.src,
  },
  {
    id: "6",
    name: "شركة الجزيرة",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img6.src,
  },
  {
    id: "6",
    name: "شركة الجزيرة",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img6.src,
  },
  {
    id: "6",
    name: "شركة الجزيرة",
    description:
      "منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية ",
    projectImage: img6.src,
  },
];
export default function Gallery() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:850px)");
  const isBigScreen = useMediaQuery("(min-width:1900px)");
  return (
    <Box sx={{ backgroundImage: "linear-gradient(#dff9ff, #FFFDFF)" }}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          marginTop: "30px",
          opacity: 0.1,
          backgroundImage: `url(${background1.src})`,
          // backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box
        marginTop={"30px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{ overflow: "hidden" }}
      >
        <Box display={"flex"} flexDirection={"row"} marginTop={"50px"}>
          <Box component="img" src={img8.src} height={"250px"} />
          <Typography
            marginTop={"70px"}
            style={myFont.style}
            sx={{ fontSize: isMobile ? "1.3rem" : "50px", color: "#f69512" }}
          >
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                2000,
                "تَعَرَف عَلَى آخر أَعمَالِنا ",
                2000,
                "تَعَرَف عَلَى آخر إِبدَاعَاتُنا ",
              ]}
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </Typography>
        </Box>
        <Grid
          container
          padding={1}
          columns={{ xs: 1, sm: 1, md: 3, lg: 3, xl: 3 }}
          spacing={{ xs: 2, md: 3 }}
          marginTop={2}
          alignItems="center"
          justifyContent="center"
        >
          {projects.map((project) => (
            <Grid>
              <ProjectCard
                id={project.id}
                name={project.name}
                description={project.description.substring(0, 145) + "...."}
                projectImage={project.projectImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
