import styled from "@emotion/styled";
import { QuestionsData } from "../../types";

interface QuestionsCardProps {
  questionData: QuestionsData;
}

export const QuestionCard = ({ questionData }: QuestionsCardProps) => {
  const { id, questions, possibleAnswers, correctAnswer } = questionData;

  return (
    <Card>
      <h2>
        {id} {questions}
      </h2>
      {possibleAnswers.map((answer: string, index: number) => {
        return (
          <p key={`answer-number-${index}`}>
            {index + 1} {answer}
          </p>
        );
      })}
      <p>Answer : {correctAnswer}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;
