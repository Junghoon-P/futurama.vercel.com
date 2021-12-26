import styled from "@emotion/styled";
import { CastData } from "../../types";

interface CastCardProps {
  castData: CastData;
}

export const CastCard = ({ castData }: CastCardProps) => {
  const { name, bio, born } = castData;

  return (
    <Card>
      <h1>{name}</h1>
      <p>{born}</p>
      <MoreInfo href={bio.url}>More about {name}</MoreInfo>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;

const MoreInfo = styled.a`
  border-radius: 2rem;
  padding: 10px 10px;
  font-weight: 600;
  background-color: #fff;
  color: #424141;

  :hover {
    background-color: #af5cf2;
    color: #fff;
  }
`;
