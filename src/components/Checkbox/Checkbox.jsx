import clsx from 'clsx';

import classes from './Checkbox.module.scss';
import { useDispatch, useSelector } from 'react-redux';

function Checkbox({ color = '', children, value, cb }) {
  const dispatch = useDispatch();
  const status = useSelector(
    color
      ? (state) => state.app.color[value]
      : (state) => state.app.forms[value]
  );
  const styles = clsx(classes.checkbox, color && classes[color]);
  return (
    <label className={styles}>
      <input
        type="checkbox"
        checked={status}
        onChange={() => dispatch(cb(value))}
      />
      {children}
    </label>
  );
}
export { Checkbox };
