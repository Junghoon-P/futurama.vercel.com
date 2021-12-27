import React from "react";
import { Navigation } from "./Navigation";
import styled from "@emotion/styled";
import { PALLETS } from "../../constants";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Wrap>
        <Navigation />
        <Container>{children}</Container>
      </Wrap>
    </>
  );
};

const Wrap = styled.main`
  background-color: ${PALLETS.MAIN};
  min-width: 100vw;
  min-height: 100vh;
`;

const Container = styled.main`
  max-width: 1280px;
  margin: auto;
`;
