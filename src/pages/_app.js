import "@/styles/globals.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
// import { SessionProvider } from "next-auth/react";
// import { SSRProvider } from "react-bootstrap";
import { Poppins as MainFont } from "next/font/google";

const main_font = MainFont({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      // easing: "ease-out-cubic",
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {/* <SessionProvider session={pageProps.session}> */}
      {/* <SSRProvider> */}
      {/* <NodHeader /> */}
      <main className={main_font.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      {/* </SSRProvider> */}
      {/* </SessionProvider> */}
    </>
  );
}
