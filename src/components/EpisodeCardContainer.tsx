import styled from "@emotion/styled";
import { EpisodesData } from "../types";
import { EpisodeCard } from "./episodeCard";
import { useEpisodeData } from "../hooks/useEpisodeData";

export const EpisodeCardContainer = () => {
  const { data, error } = useEpisodeData("");

  if (error) return <div>An error has occured.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((episode: EpisodesData) => {
        return (
          <EpisodeCard
            episodeData={episode}
            key={`episode-character-${episode.id}`}
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
