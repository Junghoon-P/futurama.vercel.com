import { NextPage } from "next";
import { useState } from "react";
import { useQuestionsData } from "../../hooks/useQuestionsData";
import styled from "@emotion/styled";
import { Error, Loading } from "../../components/PageHandling";
import { MEDIA_QUERY_END_POINT, PALLETS } from "../../constants";

const QuestionDetail: NextPage = () => {
  const [questionId, setQuestionId] = useState<number>(1);
  const [select, setSelect] = useState<string>("");

  const { data, error } = useQuestionsData(questionId);

  if (error) return <Error />;
  if (!data) return <Loading />;

  const selected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(e.target.value);
  };

  const nextQuiz = () => {
    if (id === 28) {
      if (select === correctAnswer) {
        alert("Correct");
      } else {
        alert("Wrong~ Try again!");
      }
    } else if (select === correctAnswer) {
      alert("Correct");
      setQuestionId(questionId + 1);
    } else {
      alert("Wrong! Try again~~");
    }
  };

  const { id, question, possibleAnswers, correctAnswer } = data;

  return (
    <QuizWrap>
      <h2>{id}/28 </h2>
      <p>{question}</p>

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
    </QuizWrap>
  );
};

const QuizWrap = styled.article`
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid ${PALLETS.PURPLE};
  border-radius: 1.5rem;
  box-shadow: ${PALLETS.SHADOW};
  background-color: ${PALLETS.TRANSPARENT};
  line-height: 1.3rem;

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: ${PALLETS.PURPLE};
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

const NextBtn = styled.button`
  float: right;
  padding: 8px 13px;
  border: 2px solid ${PALLETS.GREEN};
  border-radius: 1.5rem;
  font-weight: 550;
  color: ${PALLETS.GREEN};
  background-color: ${PALLETS.TRANSPARENT};
  box-shadow: ${PALLETS.SHADOW};

  &:hover {
    border: 2px solid ${PALLETS.TRANSPARENT};
    color: #fff;
    background-color: ${PALLETS.RED};
  }
`;

const Article = styled.article`
  margin: 0 10px 10px 0;
`;

export default QuestionDetail;
