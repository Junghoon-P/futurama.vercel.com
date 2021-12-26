import styled from "@emotion/styled";
import Link from "next/link";
import { CharacterData } from "../../types";

interface CharacterCardProps {
  characterData: CharacterData;
}

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  const { id, images, name } = characterData;

  return (
    <Card>
      <Link href={`/characters/${id}`}>
        <a>
          <Profile src={images.main} alt="" />
          <h1>
            {name.first} {name.middle} {name.last}
          </h1>
        </a>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;
