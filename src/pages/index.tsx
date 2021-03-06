import Head from "next/head";
import { MainPage } from "../components/MainPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Futurama : The Animations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  );
}
