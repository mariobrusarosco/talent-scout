import React, { useState } from "react";
import { Button } from "../study-and-validation/Button/Button";
import { Checkbox } from "../study-and-validation/CheckBox/Checkbox";
import { Incrementing } from "../study-and-validation/Incrementing/Incrementing";
import { StateChanges } from "../study-and-validation/StateChanges/StateChanges";

const HomeScreen = () => {
  return (
    <section>
      <h1>Talent Scout</h1>

      <StateChanges />
    </section>
  );
};

export default HomeScreen;
