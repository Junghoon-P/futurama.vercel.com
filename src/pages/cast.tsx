import type { NextPage } from "next";
import { CastCardContainer } from "../components/CastCardContainer";

const Cast: NextPage = () => {
  return (
    <div>
      <h1>Cast List</h1>
      <CastCardContainer />
    </div>
  );
};

export default Cast;
