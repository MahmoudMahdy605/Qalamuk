import { MiniCard } from "@/components/MiniCard";
import SlideShow from "@/components/SlideShow";
import Slider from "@/components/Slider/index";
import {
  AuditOutlined,
  UserSwitchOutlined,
  BookOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Grid, Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack height={"90vh"} sx={{ display: "flex", justifyContent: "center" }}>
      <Slider />
      <Grid container my={4} rowGap={3}>
        <Grid item xs={6} md={3}>
          <MiniCard text={"مدونة"} value={1100} Icon={BookOutlined} />
        </Grid>
        <Grid item xs={6} md={3}>
          <MiniCard text={"سنة"} value={12} Icon={FieldTimeOutlined} />
        </Grid>
        <Grid item xs={6} md={3}>
          <MiniCard text={"عميل"} value={2300} Icon={UserSwitchOutlined} />
        </Grid>
        <Grid item xs={6} md={3}>
          <MiniCard text={"مشروع"} value={250} Icon={AuditOutlined} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Page;
