import classes from './RadioButton.module.scss';

function RadioButton({ name, value, children, checked, cb }) {
  return (
    <label className={classes.radio}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={cb}
      />
      {children}
    </label>
  );
}
export { RadioButton };
