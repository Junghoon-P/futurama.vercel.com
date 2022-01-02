import styled from "@emotion/styled";
import type { NextPage } from "next";
import { InfoDataContainer } from "../components/Info/InfoCardContainer";

const Info: NextPage = () => {
  return (
    <Container>
      <InfoDataContainer />
    </Container>
  );
};

export default Info;

const Container = styled.main`
  padding: 0 30px;
`;
