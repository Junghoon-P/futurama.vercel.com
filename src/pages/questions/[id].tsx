import { NextPage } from "next";
import { useState } from "react";
import { useQuestionsData } from "../../hooks/useQuestionsData";
import styled from "@emotion/styled";

const QuestionDetail: NextPage = () => {
  const [questionId, setQuestionId] = useState<number>(1);

  const { data, error } = useQuestionsData(questionId);

  if (error) return <div>An error has occured.</div>;
  if (!data) return <div>Loading...</div>;

  const nextQuiz = () => {
    setQuestionId(questionId + 1);
  };

  const { id, question, possibleAnswers, correctAnswer } = data;

  return (
    <div>
      <h2>{question}</h2>
      {possibleAnswers.map((answerList: string, index: number) => (
        <Article key={`saying-${index}`}>
          <span>{index + 1} </span>
          <span>{answerList}</span>
        </Article>
      ))}
      <NextBtn onClick={nextQuiz}>Next</NextBtn>
    </div>
  );
};

const NextBtn = styled.button``;

const Article = styled.article`
  margin: 0 10px 10px 0;
`;

export default QuestionDetail;
