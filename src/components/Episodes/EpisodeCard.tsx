import styled from "@emotion/styled";
import { EpisodesData } from "../../types";
import { MEDIA_QUERY_END_POINT, PALLETS } from "../../constants";

interface EpisodeCardProps {
  episodeData: EpisodesData;
}

export const EpisodeCard = ({ episodeData }: EpisodeCardProps) => {
  const { number, title, writers, originalAirDate, desc } = episodeData;

  return (
    <Card>
      <h2>Episode {number}</h2>
      <h3>{title}</h3>
      <p>{writers}</p>
      <p>{originalAirDate}</p>
      <p>{desc}</p>
    </Card>
  );
};

const Card = styled.article`
  width: 100%;
  margin-bottom: 30px;
  padding: 10px 10px 12px;
  border-radius: 1.5rem;
  border: 2px solid ${PALLETS.PURPLE};
  line-height: 1.3;
  box-shadow: ${PALLETS.SHADOW};
  background-color: ${PALLETS.TRANSPARENT};

  h2 {
    font-size: 23px;
    font-weight: 500;
  }

  h3 {
    margin: 3px 0 13px;
    font-size: 19px;
    font-weight: 500;
  }
`;
