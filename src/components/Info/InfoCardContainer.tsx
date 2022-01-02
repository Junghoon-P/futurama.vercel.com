import styled from "@emotion/styled";
import { InfoCard } from "./InfoCard";
import { useInfoData } from "../../hooks/useInfoData";
import { MEDIA_QUERY_END_POINT } from "../../constants";
import { Error, Loading } from "../PageHandling";

export const InfoDataContainer = () => {
  const { data, error } = useInfoData();

  if (error) return <Error />;
  if (!data) return <Loading />;

  const { synopsis, creators } = data[0];

  return (
    <Container>
      {creators.map((creator: { name: string; url: string }) => {
        return (
          <InfoCard
            infoDataProps={creator}
            key={`futurama-info-${creator.name}`}
          />
        );
      })}
      <br />
      <p>{synopsis}</p>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 10px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin-top: 20px;
  }
`;
