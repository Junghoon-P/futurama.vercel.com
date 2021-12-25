import axios from "axios";
import useSWR from "swr";
import { CharacterData } from "../../types";
import styled from "@emotion/styled";

const fetcher = (url: string) => axios(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );
  if (error) return <div>An error has occured.</div>;
  if (!data) return <div>Loading...</div>;
  console.log(`data`, data);

  return (
    <Container>
      {data.map((character: CharacterData) => {
        const { id, images, name } = character;
        return (
          <Card key={`futurama-character-${id}`}>
            <Profile src={images.main} alt="" />
            <h1>
              {name.first} {name.middle} {name.last}
            </h1>
          </Card>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Card = styled.div`
  max-width: 360px;
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;
