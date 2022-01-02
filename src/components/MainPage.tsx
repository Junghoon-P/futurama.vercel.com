import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";

export const MainPage = () => {
  return (
    <div>
      <Main>
        <MainImage src="/image/3shot.png" alt="shut-up" />
        <Slogan>Shut up and take my time!</Slogan>
      </Main>
    </div>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainImage = styled.img`
  max-width: 90vw;
  margin-top: 30px;
`;

const Slogan = styled.h1`
  margin-top: 60px;
  background: -webkit-linear-gradient(
    298deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(217, 89, 61, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 25px;
  }
`;
