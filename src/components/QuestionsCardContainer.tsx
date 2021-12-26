import styled from "@emotion/styled";
import { QuestionsData } from "../types";
import { QuestionCard } from "./QuestionCard";
import { useQuestionsData } from "../hooks/useQuestionsData";

export const QuestionCardContainer = () => {
  const { data, error } = useQuestionsData("");

  if (error) return <div>An error has occured.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((question: QuestionsData) => {
        return (
          <QuestionCard
            questionData={question}
            key={`questions-${question.id}`}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
