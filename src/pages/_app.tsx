import Footer from "@/components/main/common/footer";
import Header from "@/components/main/common/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} /> <Footer />
    </>
  );
}
