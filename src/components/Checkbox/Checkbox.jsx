import clsx from 'clsx';
import classes from './Checkbox.module.scss';

function Checkbox({ color, children, value, cb }) {
  const styles = clsx(classes.checkbox, color && classes[color]);
  return (
    <label className={styles}>
      <input type="checkbox" checked={value} onChange={() => cb()} />
      {children}
    </label>
  );
}
export { Checkbox };
