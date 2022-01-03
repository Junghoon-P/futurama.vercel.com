import styled from "@emotion/styled";
import { InventoryData } from "../../types";
import { InventoryCard } from "./InventoryCard";
import { useInventoryData } from "../../hooks/useInventoryData";
import { Error, Loading } from "../PageHandling";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const InventoryCardContainer = () => {
  const { data, error } = useInventoryData("");

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((inventory: InventoryData) => {
        return (
          <InventoryCard
            inventoryData={inventory}
            key={`futurama-character-${inventory.id}`}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
