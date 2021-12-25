import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCharacterData } from "../../hooks/useCharacterData";

const CharacterDetail: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, error } = useCharacterData(id);

  if (error) return <div>An error has occured.</div>;
  if (!data) return <div>Loading...</div>;

  const { images, name } = data;

  return (
    <div>
      <img src={images.main} alt="" />
      <h1>{name.first}</h1>
    </div>
  );
};

export default CharacterDetail;
