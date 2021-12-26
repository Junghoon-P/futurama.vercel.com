import styled from "@emotion/styled";
import { CastData } from "../types";
import { CastCard } from "./CastCard";
import { useCastData } from "../hooks/useCastData";

export const CastCardContainer = () => {
  const { data, error } = useCastData("");

  if (error) return <div>An error has occured.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((cast: CastData) => {
        return <CastCard castData={cast} key={`futurama-cast-${cast.id}`} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
