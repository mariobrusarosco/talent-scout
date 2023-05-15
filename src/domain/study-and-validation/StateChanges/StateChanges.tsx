import { useState } from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../CheckBox/Checkbox";

export const StateChanges = () => {
  const [checked, setChecked] = useState(false);

  // Approach One: using parent State to control the checked/unchecked flow
  const handleChange = () => {
    console.log("doing some stuff before checking the checkbox");

    setChecked((prevState) => !prevState);
  };

  // Approach Two: using event.target.checked to control the checked/unchecked flow
  // const handleChange = (event: any) => {
  //   console.log("doing some stuff before checking the checkbox");

  //   setChecked(event.target.checked);
  // };

  return (
    <div>
      <Checkbox checked={checked} handleChange={handleChange} />
    </div>
  );
};
