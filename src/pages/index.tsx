import { MiniCard } from "@/components/MiniCard";
import SlideShow from "@/components/SlideShow";
import Slider from "@/components/Slider/index";
import ProjectsGallery from "@/components/ProjectsGallery";
import SwipeableTabs from "@/components/SwipeableTabs";
import {
  AuditOutlined,
  UserSwitchOutlined,
  BookOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Grid, Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack
      pt={{ md: "69px", sm: "64px" }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Slider />
      <Grid container my={3} rowGap={3}>
        <Grid item xs={6} md={3}>
          <MiniCard text={"مشروع"} value={1300} Icon={BookOutlined} />
        </Grid>
        <Grid item xs={6} md={3}>
          <MiniCard text={"عميل راضٍ"} value={600} Icon={UserSwitchOutlined} />
        </Grid>
        <Grid item xs={6} md={3}>
          <MiniCard text={"نص إبداعي"} value={3500} Icon={FileTextOutlined} />
        </Grid>
        <Grid item xs={6} md={3}>
          <MiniCard text={"بروفايل شركة"} value={350} Icon={AuditOutlined} />
        </Grid>
      </Grid>
      <ProjectsGallery/>
      <SwipeableTabs/>
    </Stack>
  );
};

export default Page;
