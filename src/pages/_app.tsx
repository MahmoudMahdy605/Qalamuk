import "@/style/global.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
