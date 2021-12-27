import { NextPage } from "next";
import { useState } from "react";
import { useQuestionsData } from "../../hooks/useQuestionsData";
import styled from "@emotion/styled";

const QuestionDetail: NextPage = () => {
  const [questionId, setQuestionId] = useState<number>(1);
  const [select, setSelect] = useState<string>("");

  const { data, error } = useQuestionsData(questionId);

  if (error) return <div>An error has occured.</div>;
  if (!data) return <div>Loading...</div>;

  const selected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(e.target.value);
  };

  const nextQuiz = () => {
    if (id === 28) {
      if (select === correctAnswer) {
        alert("뎃츠 롸잇");
      } else {
        alert("뤙 엔서");
      }
    } else if (select === correctAnswer) {
      alert("뎃츠 롸잇");
      setQuestionId(questionId + 1);
    } else {
      alert("뤙 엔서");
    }
  };

  const { id, question, possibleAnswers, correctAnswer } = data;

  return (
    <div>
      <h2>
        {id}/28 <span>{question}</span>
      </h2>
      {possibleAnswers.map((answerList: string, index: number) => (
        <Article key={`saying-${index}`}>
          <input
            type="radio"
            id="quiz"
            name="quiz's"
            value={answerList}
            onChange={selected}
          />
          <label htmlFor="quiz">{answerList}</label>
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
