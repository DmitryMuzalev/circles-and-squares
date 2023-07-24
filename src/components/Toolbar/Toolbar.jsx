import classes from "./Toolbar.module.scss";
import { Checkbox } from "../Checkbox/Checkbox";
import { ColumnCount } from "../ColumnCount/ColumnCount";
import { RadioButton } from "../RadioButton/RadioButton";

function Toolbar() {
  return (
    <div className={classes.toolbar}>
      <div>
        <Checkbox color="red">красный</Checkbox>
        <Checkbox color="green">зелёный</Checkbox>
        <Checkbox color="blue">cиний</Checkbox>
        <Checkbox color="yellow">жёлтый</Checkbox>
      </div>
      <div>
        <RadioButton name="shades" value="all">
          все
        </RadioButton>
        <RadioButton name="shades" value="">
          тёмные
        </RadioButton>
        <RadioButton name="shades" value="">
          светлые
        </RadioButton>
      </div>
      <ColumnCount />
    </div>
  );
}
export { Toolbar };
