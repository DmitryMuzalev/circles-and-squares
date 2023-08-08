import classes from './Header.module.scss';
import { Burger } from '../Burger/Burger';
import { Filter } from '../Filter/Filter';

function Header() {
  return (
    <header className={classes.header}>
      <h2>Круги и квадраты, v.1.0</h2>
      <div className={classes.header__toolbar}>
        <Burger />
        <div style={{ display: 'flex', columnGap: '2rem' }}>
          <Filter name="forms" type="check" />
        </div>
      </div>
    </header>
  );
}
export { Header };
