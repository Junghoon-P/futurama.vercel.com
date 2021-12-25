import { NextPage } from "next";
import { CharacterCardContainer } from "../../components/CharacterCardContainer";

const Characters: NextPage = () => {
  return (
    <div>
      <h1>Futurama Character List</h1>
      <CharacterCardContainer />
    </div>
  );
};

export default Characters;
