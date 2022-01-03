import styled from "@emotion/styled";
import { PALLETS } from "../../constants";

interface Creator {
  infoDataProps: {
    name: string;
    url: string;
  };
}

export const InfoCard = ({ infoDataProps }: Creator) => {
  const { name, url } = infoDataProps;

  return (
    <Card>
      <h1>{name}</h1>
      <Profile href={url}>More about Creators</Profile>
    </Card>
  );
};

const Card = styled.div`
  margin: 0 20px;
  padding: 10px 10px 13px;
  border-radius: 10px;
  line-height: 1.3;
  background-color: ${PALLETS.EGG};

  h1 {
    margin-bottom: 7px;
    font-size: 19px;
    font-weight: bold;
  }
`;

const Profile = styled.a`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
  padding: 3px 5px 4px;
  border-radius: 7px;
  color: #9c9999;
  background-color: ${PALLETS.TRANSPARENT};

  &:hover {
    color: #fff;
    background-color: ${PALLETS.RED};
  }
`;
