import styled from "@emotion/styled/";
import type { NextPage } from "next";
import { CharacterCardContainer } from "../../components/Character/CharacterCardContainer";
import { MEDIA_QUERY_END_POINT } from "../../constants";

const Characters: NextPage = () => {
  return (
    <div>
      <Header>Futurama Character List</Header>
      <CharacterCardContainer />
    </div>
  );
};

const Header = styled.h1`
  margin: 20px 0;
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 20px;
  }
`;

export default Characters;
