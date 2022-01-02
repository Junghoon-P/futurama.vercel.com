import styled from "@emotion/styled";
import { CharacterData } from "../../types";
import { CharacterCard } from "./CharacterCard";
import { useCharacterData } from "../../hooks/useCharacterData";
import { Error, Loading } from "../PageHandling";

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
