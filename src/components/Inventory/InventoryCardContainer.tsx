import styled from "@emotion/styled";
import { InventoryData } from "../../types";
import { InventoryCard } from "./InventoryCard";
import { useInventoryData } from "../../hooks/useInventoryData";
import { Error, Loading } from "../PageHandling";

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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
