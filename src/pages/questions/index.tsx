import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";
import { PALLETS } from "../../constants";

const Questions: NextPage = () => {
  return (
    <QuizWrap>
      <h1>Futurama Quiz</h1>
      <Link href={"/questions/1"} passHref>
        <StartBtn>Start</StartBtn>
      </Link>
    </QuizWrap>
  );
};

const QuizWrap = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 30vh;

  h1 {
    margin-bottom: 30px;
    font-size: 50px;
    font-weight: 600;
    color: ${PALLETS.PURPLE};
    background: -webkit-linear-gradient(
      298deg,
      #9d39df 10%,
      #1dfd30 50%,
      rgba(217, 89, 61, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StartBtn = styled.a`
  width: 100px;
  padding: 10px 10px 12px;
  border: 1px solid ${PALLETS.PURPLE};
  border-radius: 1.5rem;
  text-align: center;
  font-weight: 500;
  color: ${PALLETS.PURPLE};
  background-color: ${PALLETS.TRANSPARENT};
  box-shadow: ${PALLETS.SHADOW};

  &:hover {
    color: ${PALLETS.YELLOW};
    background-color: ${PALLETS.RED};
    border: 1px solid ${PALLETS.RED};
  }
`;
export default Questions;
