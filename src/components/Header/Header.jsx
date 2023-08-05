import classes from './Header.module.scss';
import { Burger } from '../Burger/Burger';
import { Checkbox } from '../Checkbox/Checkbox';
import { toggleForm } from '../../redux/slices/figuresSlices';

function Header() {
  return (
    <header className={classes.header}>
      <h2>Круги и квадраты, v.1.0</h2>
      <div className={classes.header__toolbar}>
        <Burger />
        <div className={classes.filter}>
          <Checkbox value="circle" cb={toggleForm}>
            круги
          </Checkbox>
          <Checkbox value="square" cb={toggleForm}>
            квадраты
          </Checkbox>
        </div>
      </div>
    </header>
  );
}
export { Header };
