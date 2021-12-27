import type { NextPage } from "next";
import Link from "next/link";

const Questions: NextPage = () => {
  return (
    <div>
      <h1>Futurama Quiz</h1>
      <Link href={"/questions/1"} passHref>
        <a>Start</a>
      </Link>
    </div>
  );
};

export default Questions;
