import type { NextPage } from "next";
import { InventoryCardContainer } from "../components/Inventory/InventoryCardContainer";

const Inventory: NextPage = () => {
  return (
    <section>
      <h1 className="sr-only">Inventory</h1>
      <InventoryCardContainer />
    </section>
  );
};

export default Inventory;
