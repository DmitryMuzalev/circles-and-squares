import classes from "./RadioButton.module.scss";

function RadioButton({ name = "shades", value = "all", children }) {
  return (
    <label className={classes.radio}>
      <input type="radio" name={name} value={value} checked={value === "all"} />
      {children}
    </label>
  );
}
export { RadioButton };
