import styled from "@emotion/styled";

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
      <Profile href={url}>More about Creators</Profile>
      <h1>{name}</h1>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;

const Profile = styled.a`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;
