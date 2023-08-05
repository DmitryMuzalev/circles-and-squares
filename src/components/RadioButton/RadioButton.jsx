import { useDispatch, useSelector } from 'react-redux';
import classes from './RadioButton.module.scss';
import { changeBrightness } from '../../redux/slices/figuresSlices';

function RadioButton({ name, value, children }) {
  const currentValue = useSelector((state) => state.app.brightness);
  const dispatch = useDispatch();

  return (
    <label className={classes.radio}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={currentValue === value}
        onChange={() => dispatch(changeBrightness(value))}
      />
      {children}
    </label>
  );
}
export { RadioButton };
