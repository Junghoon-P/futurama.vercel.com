import styled from "@emotion/styled";
import { InfoData } from "../types";
import { InfoCard } from "./InfoCard";
import { useInfoData } from "../hooks/useInfoData";

export const InfoDataContainer = () => {
  const { data, error } = useInfoData("");

  if (error) return <div>An error has occured.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((info: InfoData) => {
        return <InfoCard infoData={info} key={`futurama-info-${info.id}`} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
