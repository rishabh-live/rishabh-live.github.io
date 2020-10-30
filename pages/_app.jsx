import "bootstrap/dist/css/bootstrap.min.css";
import {} from "../components/localLibs/w3.min.css";
import { title } from "process";
import HEAD from "next/head";
import LINK from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <html lang="en-US">
      <HEAD>
        <title> Rishabh - live | Rishabh | rishabh.live </title>
        <link rel="icon" href="/main-ico.png" />
        <meta name="title" content="Rishabh | rishabh-live | rishabh.live" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="Official Website for rishabh.live This Theme is called as RiLive"
        />
      </HEAD>
      <Component {...pageProps} />
    </html>
  );
}
