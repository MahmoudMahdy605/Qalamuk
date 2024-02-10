import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import { styled } from "@mui/material/styles";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../fonts/GEDinkum-Bold-1.ttf" });

import { Project } from "reactflow";
interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  projectImage: string;
}
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function ProjectCard({
  id,
  projectImage,
  name,
  description,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 3,
        minHeight: "375px",
        maxHeight: "375px",
      }}
    >
      <CardActionArea href={"/projects/" + id}>
        <CardMedia
          component="img"
          sx={{ height: "200px" }}
          image={projectImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            dir={"rtl"}
            style={myFont.style}
            color={"orange"}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            dir={"rtl"}
            style={myFont.style}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        sx={{
          marginBottom: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
        }}
        component="label"
        variant="contained"
        startIcon={<ChromeReaderModeIcon />}
      >
        <Typography style={myFont.style} marginRight={1} color={"white"}>
          إقرأ المَزِيد
        </Typography>

        <VisuallyHiddenInput type="file" />
      </Button>
    </Card>
  );
}
