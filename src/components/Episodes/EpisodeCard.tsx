import styled from "@emotion/styled";
import { EpisodesData } from "../../types";

interface EpisodeCardProps {
  episodeData: EpisodesData;
}

export const EpisodeCard = ({ episodeData }: EpisodeCardProps) => {
  const { number, title, writers, originalAirDate, desc } = episodeData;

  return (
    <Card>
      <h1>
        {number} {title}
      </h1>
      <p>{writers}</p>
      <p>{originalAirDate}</p>
      <p>{desc}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;
