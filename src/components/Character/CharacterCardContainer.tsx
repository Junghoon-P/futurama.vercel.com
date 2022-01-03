import styled from "@emotion/styled";
import { CharacterData } from "../../types";
import { CharacterCard } from "./CharacterCard";
import { useCharacterData } from "../../hooks/useCharacterData";
import { Error, Loading } from "../PageHandling";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const CharacterCardContainer = () => {
  const { data, error } = useCharacterData("");

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((character: CharacterData) => {
        return (
          <CharacterCard
            characterData={character}
            key={`futurama-character-${character.id}`}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    place-items: center;
    row-gap: 30px;
  }
`;
