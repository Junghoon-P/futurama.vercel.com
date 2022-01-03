import styled from "@emotion/styled";
import { EpisodesData } from "../../types";
import { EpisodeCard } from "./EpisodeCard";
import { useEpisodeData } from "../../hooks/useEpisodeData";
import { Error, Loading } from "../PageHandling";

export const EpisodeCardContainer = () => {
  const { data, error } = useEpisodeData("");

  if (error) return <Error />;
  if (!data) return <Loading />;

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

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
