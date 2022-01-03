import styled from "@emotion/styled/";
import type { NextPage } from "next";
import { CharacterCardContainer } from "../../components/Character/CharacterCardContainer";

const Characters: NextPage = () => {
  return (
    <Wrap>
      <CharacterCardContainer />
    </Wrap>
  );
};

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export default Characters;
