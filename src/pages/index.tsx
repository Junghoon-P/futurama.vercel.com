import Head from "next/head";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT, PALLETS } from "../constants";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Futurama : The Animations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <MainImage src="/image/3shot.png" alt="shut-up-gif" />
        <Slogan>Shut up and take my time!</Slogan>
      </Main>
    </div>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainImage = styled.img`
  max-width: 400px;
  margin-top: 30px;
`;

const Slogan = styled.h1`
  margin-top: 60px;
  color: ${PALLETS.POINT};
`;
