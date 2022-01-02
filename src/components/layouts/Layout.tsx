import React from "react";
import { Navigation } from "./Navigation";
import styled from "@emotion/styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>{children}</Container>
    </div>
  );
};

const Container = styled.main`
  max-width: 1280px;
  margin: auto;
`;
