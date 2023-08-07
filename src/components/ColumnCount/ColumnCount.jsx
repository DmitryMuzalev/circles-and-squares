import { changeNumberColumns } from '../../redux/slices/figuresSlices';
import classes from './ColumnCount.module.scss';
import { useDispatch, useSelector } from 'react-redux';

function ColumnCount() {
  const dispatch = useDispatch();
  const numberColumns = useSelector((state) => state.app.numberColumns);
  const handleChange = (e) => {
    const currentValue = e.target.value.replace(/[^2|3|4]/g, '').slice(0, 1);
    dispatch(changeNumberColumns(currentValue));
  };
  return (
    <label className={classes.count}>
      колонок
      <input type="text" value={numberColumns} onChange={handleChange} />
    </label>
  );
}
export { ColumnCount };
