import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../components/main.css';
import {} from '../components/localLibs/w3.min.css';
import { title } from 'process';
import HEAD from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
        <HEAD>
            <title>Rishabh-live | Rishabh | rishabh.live</title>
            <link rel="icon" href="/main-ico.png"/>
        </HEAD>
    <Component {...pageProps }
    />
    </>);
}