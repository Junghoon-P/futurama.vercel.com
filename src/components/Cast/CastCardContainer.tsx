import styled from "@emotion/styled";
import { CastData } from "../../types";
import { CastCard } from "./CastCard";
import { useCastData } from "../../hooks/useCastData";
import { Error, Loading } from "../PageHandling";
import { MEDIA_QUERY_END_POINT } from "../../constants";

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

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
