import { useSelector } from 'react-redux';
import { Figure } from './Figure/Figure';
import classes from './Figures.module.scss';

function Figures() {
  const { figures, color, forms, brightness } = useSelector(
    (store) => store.app
  );

  const listFigures =
    brightness === 'dark'
      ? figures.filter((f) => color[f.color] && forms[f.form] && f.dark)
      : brightness === 'light'
      ? figures.filter((f) => color[f.color] && forms[f.form] && !f.dark)
      : figures.filter((f) => color[f.color] && forms[f.form]);

  return (
    <ul className={classes.figures}>
      {listFigures.map((f, i) => (
        <li key={i}>
          <Figure {...f} />
        </li>
      ))}
    </ul>
  );
}
export { Figures };
