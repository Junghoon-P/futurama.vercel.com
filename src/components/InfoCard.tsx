import styled from "@emotion/styled";
import { InfoData } from "../types";

interface InfoDataProps {
  infoData: InfoData;
}

interface Creator {
  name: string;
  url: string;
}

export const InfoCard = ({ infoData }: InfoDataProps) => {
  const { creators } = infoData;

  return (
    <Card>
      {creators.map((creator: Creator, idx: number) => {
        return (
          <>
            <Profile href={creator.url} key={`futurama-character-${idx}`}>
              More about Creators
            </Profile>
            <h1>{creator.name}</h1>
          </>
        );
      })}
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;

const Profile = styled.a`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;
