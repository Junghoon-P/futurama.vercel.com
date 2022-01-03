import styled from "@emotion/styled";
import type { NextPage } from "next";
import { InfoDataContainer } from "../components/Info/InfoCardContainer";

const Info: NextPage = () => {
  return (
    <Container>
      <h1 className="sr-only">Info</h1>
      <InfoDataContainer />
    </Container>
  );
};

export default Info;

const Container = styled.section`
  padding: 0 30px;
`;
