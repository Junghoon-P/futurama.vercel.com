import styled from "@emotion/styled";
import { InventoryData } from "../../types";
import { PALLETS } from "../../constants";

interface InventoryDataProps {
  inventoryData: InventoryData;
}

export const InventoryCard = ({ inventoryData }: InventoryDataProps) => {
  const { title, category, description, price } = inventoryData;

  return (
    <Card>
      <h2>{title}</h2>
      <span>Category : {category}</span>
      <Price>$ {price}</Price>
      <p>{description}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
  border-radius: 1.3rem;
  padding: 20px;
  border: 2px solid ${PALLETS.GREEN};
  line-height: 1.3;
  background-color: ${PALLETS.TRANSPARENT};

  h2 {
    font-size: 19px;
    font-weight: 500;
  }

  span {
    display: inline-block;
    margin-bottom: 13px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Price = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${PALLETS.PURPLE};
`;
