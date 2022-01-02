import styled from "@emotion/styled";
import Link from "next/link";
import { CharacterData } from "../../types";
import { MEDIA_QUERY_END_POINT, PALLETS } from "../../constants";

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
          <h3>
            {name.first} {name.middle} {name.last}
          </h3>
        </a>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
  padding: 10px;
  border: 1px solid ${PALLETS.ORANGE};
  border-radius: 10px;
  background-color: ${PALLETS.TRANSPARENT};

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 120px;
  }
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;
