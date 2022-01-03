import styled from "@emotion/styled";
import type { NextPage } from "next";
import { CastCardContainer } from "../components/Cast/CastCardContainer";

const Cast: NextPage = () => {
  return (
    <CastWrap>
      <CastCardContainer />
    </CastWrap>
  );
};

const CastWrap = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export default Cast;
