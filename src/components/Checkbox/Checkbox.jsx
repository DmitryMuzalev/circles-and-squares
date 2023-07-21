import clsx from "clsx";

import classes from "./Checkbox.module.scss";
import { useState } from "react";

function Checkbox({ color = "", children }) {
  const [isChecked, setIsChecked] = useState(true);
  const styles = clsx(classes.checkbox, color && classes[color]);
  return (
    <label className={styles}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      {children}
    </label>
  );
}
export { Checkbox };
