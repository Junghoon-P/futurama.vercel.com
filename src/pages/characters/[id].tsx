import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCharacterData } from "../../hooks/useCharacterData";
import { Error, Loading } from "../../components/PageHandling";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT, PALLETS } from "../../constants";

const CharacterDetail: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, error } = useCharacterData(id);

  if (error) return <Error />;
  if (!data) return <Loading />;

  const { images, name, sayings } = data;

  const randomSaying = (say: []) => {
    const random = Math.floor(Math.random() * say.length);
    return say[random];
  };

  return (
    <Article>
      <img src={images.main} alt="character profile image" />
      <h1>{name.first}</h1>
      <Quote>
        <p>{randomSaying(sayings)}</p>
      </Quote>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 40px;
    padding: 10px 15px 12px;
    border-radius: 30px;
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    background-color: ${PALLETS.PURPLE};

    @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      padding: 7px 12px 9px;
      border-radius: 30px;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const Quote = styled.blockquote`
  width: 60%;

  p {
    margin-top: 40px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.3;
    text-align: center;

    @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      margin-top: 20px;
      font-size: 20px;
    }
  }
`;

export default CharacterDetail;
