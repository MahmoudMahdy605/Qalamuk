import "@/style/global.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { theme } from "@/style/theme/palette";
import { ThemeProvider } from "@mui/material";

const surt = localFont({
  src: "../assets/fonts/GEDinkum-Bold-1.ttf",
  variable: "--font-surt-bold",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={`${surt.variable} font-sans`} dir="rtl">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
