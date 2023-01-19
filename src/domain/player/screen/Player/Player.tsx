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
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );

    if (!data?.ok) {
      throw Error("Unable to find a player");
    }

    return data.json();
  } catch (error) {
    console.log({ error });

    throw error;
  }
};

export default PlayerScreen;
