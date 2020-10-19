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
            <meta name="title" content="Rishabh | rishabh-live | rishabh.live"/>
<meta name="description" content="Gladiolus Language Nectar is the first Indian startup to cater to Android and PC based games for the grammar of Indian languages."/>
        </HEAD>
    <Component {...pageProps }
    />
    </>);
}