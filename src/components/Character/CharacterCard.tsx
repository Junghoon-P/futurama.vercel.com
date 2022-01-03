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
          <Name>
            {name.first} {name.middle} {name.last}
          </Name>
        </a>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
  width: 80%;
  padding: 10px;
  border: 1px solid ${PALLETS.YELLOW};
  border-radius: 10px;
  box-shadow: ${PALLETS.SHADOW};
  background-color: ${PALLETS.TRANSPARENT};
`;

const Profile = styled.img`
  object-fit: contain;
  width: 100%;
  aspect-ratio: 9/16;
`;

const Name = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 13px;
  }
`;
