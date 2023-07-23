import { useState } from "react";
import classes from "./ColumnCount.module.scss";

function ColumnCount() {
  const [value, setValue] = useState(4);
  const handleChange = (e) => {
    const currentValue = e.target.value.replace(/[^2|3|4]/g, "").slice(0, 1);
    setValue(currentValue);
  };
  return (
    <label className={classes.count}>
      колонок
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
}
export { ColumnCount };
