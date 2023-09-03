import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  useTheme,
} from "@mui/material";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
} from "@ant-design/icons";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.grey[200],
        pb: 4,
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={3} m={7}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              من نحن؟
            </Typography>
            <Typography variant="body2" color="text.secondary">
              شركة المرعبين المحدودة, نوفر لكم راحتكم و طاقتكم و نحرص على
              سعادتكم
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              تواصل معنا
            </Typography>
            <Typography variant="body2" color="text.secondary">
              4 شارع مروان بابلو, الدخيلة, اسكندرية
            </Typography>
            <Typography variant="body2" color="text.secondary">
              يريد الكترني: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              هاتف: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              تابعنا
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <FacebookFilled />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <InstagramFilled />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <TwitterSquareFilled />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
