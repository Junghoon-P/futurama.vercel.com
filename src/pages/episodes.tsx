import type { NextPage } from "next";
import { EpisodeCardContainer } from "../components/EpisodeCardContainer";

const Episodes: NextPage = () => {
  return (
    <div>
      <h1>Futurama Episodes List</h1>
      <EpisodeCardContainer />
    </div>
  );
};

export default Episodes;
