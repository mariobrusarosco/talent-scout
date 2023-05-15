import { useCallback, useState } from "react";

export const Button = () => {
  // Internal State
  const [disabled, setDisabled] = useState(false);

  return (
    <button
      disabled={disabled}
      style={{
        background: "red",
      }}
      onClick={() => setDisabled((prevState) => !prevState)}
    >
      Hello World
    </button>
  );
};
