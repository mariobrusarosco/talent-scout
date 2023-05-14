import { useCallback, useState } from "react";

export const Button = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = useCallback(() => {
    setCounter((prevState) => ++prevState);
  }, []);

  return (
    <button
      style={{
        background: "red",
      }}
      onClick={handleClick}
    >
      Hello World: {counter}
    </button>
  );
};
