import type { NextPage } from "next";
import { InfoDataContainer } from "../components/Info/InfoCardContainer";

const Info: NextPage = () => {
  return (
    <div>
      <h1>Inventory</h1>
      <InfoDataContainer />
    </div>
  );
};

export default Info;
