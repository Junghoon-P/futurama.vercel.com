import styled from "@emotion/styled";
import type { NextPage } from "next";
import { EpisodeCardContainer } from "../components/Episodes/EpisodeCardContainer";

const Episodes: NextPage = () => {
  return (
    <Section>
      <h1 className="sr-only">Episodes</h1>
      <EpisodeCardContainer />
    </Section>
  );
};

const Section = styled.section`
  width: 80%;
  margin: 0 auto;
`;

export default Episodes;
