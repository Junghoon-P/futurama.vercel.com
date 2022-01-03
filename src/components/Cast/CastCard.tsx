import styled from "@emotion/styled";
import { CastData } from "../../types";
import { MEDIA_QUERY_END_POINT, PALLETS } from "../../constants";

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

const Card = styled.article`
  max-width: 360px;
  padding: 15px;
  border-radius: 2rem;
  line-height: 1.3;
  box-shadow: ${PALLETS.SHADOW};
  background-color: coral;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    margin-bottom: 20px;
  }
`;

const MoreInfo = styled.a`
  display: inline-block;
  padding: 10px 10px 12px;
  border-radius: 2rem;
  font-size: 13px;
  font-weight: 600;
  color: #424141;
  background-color: #fff;
  box-shadow: ${PALLETS.SHADOW};

  :hover {
    color: #fff;
    background-color: ${PALLETS.PURPLE};
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    padding: 8px 8px 10px;
    font-size: 10px;
  }
`;
