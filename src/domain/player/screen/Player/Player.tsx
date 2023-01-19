import { useParams } from "react-router-dom";

const PlayerScreen = () => {
  const params = useParams();

  return (
    <section>
      <h1>Talent Scout - Player</h1>
    </section>
  );
};

export const playerLoader = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  return await data.json();
};

export default PlayerScreen;
