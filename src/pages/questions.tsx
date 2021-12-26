import type { NextPage } from "next";
import { QuestionCardContainer } from "../components/QuestionsCardContainer";

const Questions: NextPage = () => {
  return (
    <div>
      <h1>Futurama Quiz</h1>
      <QuestionCardContainer />
    </div>
  );
};

export default Questions;
