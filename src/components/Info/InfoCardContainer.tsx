import styled from "@emotion/styled";
import { InfoCard } from "./InfoCard";
import { useInfoData } from "../../hooks/useInfoData";
import { MEDIA_QUERY_END_POINT, PALLETS } from "../../constants";
import { Error, Loading } from "../PageHandling";

export const InfoDataContainer = () => {
  const { data, error } = useInfoData();

  if (error) return <Error />;
  if (!data) return <Loading />;

  const { synopsis, creators } = data[0];

  return (
    <>
      <Container>
        {creators.map((creator: { name: string; url: string }) => {
          return (
            <InfoCard
              infoDataProps={creator}
              key={`futurama-info-${creator.name}`}
            />
          );
        })}
        <Synopsis>{synopsis}</Synopsis>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: ${PALLETS.SHADOW};
  background-color: ${PALLETS.ORANGE};
  color: #fff;

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
  }
`;

const Synopsis = styled.p`
  width: 100%;
  line-height: 1.3;
  margin-top: 20px;
`;
