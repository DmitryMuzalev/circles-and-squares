import { Checkbox } from '../Checkbox/Checkbox';
import { ColumnCount } from '../ColumnCount/ColumnCount';
import { RadioButton } from '../RadioButton/RadioButton';
import { toggleColor } from '../../redux/slices/figuresSlices';

function Toolbar() {
  return (
    <>
      <div>
        <Checkbox color="red" value="red" cb={toggleColor}>
          красный
        </Checkbox>
        <Checkbox color="green" value="green" cb={toggleColor}>
          зелёный
        </Checkbox>
        <Checkbox color="blue" value="blue" cb={toggleColor}>
          cиний
        </Checkbox>
        <Checkbox color="yellow" value="yellow" cb={toggleColor}>
          жёлтый
        </Checkbox>
      </div>
      <div>
        <RadioButton name="shades" value="all">
          все
        </RadioButton>
        <RadioButton name="shades" value="dark">
          тёмные
        </RadioButton>
        <RadioButton name="shades" value="light">
          светлые
        </RadioButton>
      </div>
      <ColumnCount />
    </>
  );
}
export { Toolbar };
