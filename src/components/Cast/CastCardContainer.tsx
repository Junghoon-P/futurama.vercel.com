import styled from "@emotion/styled";
import { CastData } from "../../types";
import { CastCard } from "./CastCard";
import { useCastData } from "../../hooks/useCastData";
import { Error, Loading } from "../PageHandling";

export const CastCardContainer = () => {
  const { data, error } = useCastData("");

  if (error) return <Error />;
  if (!data) return <Loading />;

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
  width: 80%;
  gap: 30px;
  background-color: coral;
`;
