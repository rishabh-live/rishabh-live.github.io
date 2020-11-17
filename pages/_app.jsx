import "bootstrap/dist/css/bootstrap.min.css";
import {} from "../components/localLibs/w3.min.css";




export default function App({ Component, pageProps }) {
  return (
    <html lang="en-US">
      
      <Component {...pageProps} />
    </html>
  );
}
