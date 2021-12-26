import type { NextPage } from "next";
import { InventoryCardContainer } from "../components/InventoryCardContainer";

const Inventory: NextPage = () => {
  return (
    <div>
      <h1>Inventory</h1>
      <InventoryCardContainer />
    </div>
  );
};

export default Inventory;
