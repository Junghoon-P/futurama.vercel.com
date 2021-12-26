import styled from "@emotion/styled";
import { InventoryData } from "../types";

interface InventoryDataProps {
  inventoryData: InventoryData;
}

export const InventoryCard = ({ inventoryData }: InventoryDataProps) => {
  const { title, category, description, slogan, price, stock } = inventoryData;

  return (
    <Card>
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{description}</p>
      <p>{slogan}</p>
      <p>{price}</p>
      <p>{stock}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;
