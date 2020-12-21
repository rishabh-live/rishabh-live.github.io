import HEAD from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Section/footer";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <HEAD>
        <link rel="stylesheet" href="/assets/global/css/w3.min.css" />
        <link rel="stylesheet" href="/assets/global/css/footer.css" />
      </HEAD>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
