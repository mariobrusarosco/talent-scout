import { useLoaderData, useParams } from "react-router-dom";

const PlayerScreen = () => {
  const { id } = useParams();
  const player = useLoaderData();

  console.log({ player });

  return (
    <section>
      <h1>Talent Scout - Player {id}</h1>

      {player?.title}
    </section>
  );
};

export const playerLoader = async ({ params }) => {
  console.log({ params });
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );

  return data.json();
};

export default PlayerScreen;
