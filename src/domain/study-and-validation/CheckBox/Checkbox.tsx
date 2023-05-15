import { useState } from "react";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label htmlFor="check">Checkbox</label>
      <input
        id="check"
        type="checkbox"
        onChange={(e: any) => setChecked(e.target.checked)}
        checked={checked}
      />
    </div>
  );
};
