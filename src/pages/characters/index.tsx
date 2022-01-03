import styled from "@emotion/styled/";
import type { NextPage } from "next";
import { CharacterCardContainer } from "../../components/Character/CharacterCardContainer";

const Characters: NextPage = () => {
  return (
    <Wrap>
      <h1 className="sr-only">Character</h1>
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
