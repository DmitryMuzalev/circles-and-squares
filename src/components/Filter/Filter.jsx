import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../Checkbox/Checkbox';
import { RadioButton } from '../RadioButton/RadioButton';
import {
  toggleCheckFilter,
  toggleRadioFilter,
} from '../../redux/slices/figuresSlices';

function Filter({ type, name }) {
  const dispatch = useDispatch();
  const filterFunc = ({ name, item }) => {
    return type === 'check'
      ? dispatch(toggleCheckFilter({ name, item }))
      : dispatch(toggleRadioFilter({ name, item }));
  };
  const filter = useSelector((state) => state.app.filters[name]);

  if (type === 'check') {
    const filterItems = Object.keys(filter);
    const isColor = name === 'colors';
    return (
      <>
        {filterItems.map((item, index) => {
          const color = isColor ? item : '';
          const { title, value } = filter[item];
          return (
            <Checkbox
              key={index}
              color={color}
              cb={() => filterFunc({ name, item })}
              value={value}
            >
              {title}
            </Checkbox>
          );
        })}
      </>
    );
  } else {
    const currentValue = filter.currentValue;
    const variants = filter.variants;
    return (
      <>
        {variants.map((v, index) => {
          const { title, value } = v;
          const item = value;
          return (
            <RadioButton
              key={index}
              name={name}
              value={value}
              checked={value === currentValue}
              cb={() => filterFunc({ name, item })}
            >
              {title}
            </RadioButton>
          );
        })}
      </>
    );
  }
}
export { Filter };
