import { useState } from "react";

export const Checkbox = ({ handleChange, checked }) => {
  return (
    <div>
      <label htmlFor="check">Checkbox</label>
      <input
        id="check"
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
    </div>
  );
};
