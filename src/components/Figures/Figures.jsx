import { useSelector } from 'react-redux';
import { Figure } from './Figure/Figure';
import classes from './Figures.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

function Figures() {
  const { figures, filters, numberColumns } = useSelector((store) => store.app);

  const { colors, forms, brightness } = filters;

  const listFigures =
    brightness.currentValue === 'dark'
      ? figures.filter(
          (f) => colors[f.color].value && forms[f.form].value && f.dark
        )
      : brightness.currentValue === 'light'
      ? figures.filter(
          (f) => colors[f.color].value && forms[f.form].value && !f.dark
        )
      : figures.filter((f) => colors[f.color].value && forms[f.form].value);

  const variantsAnimateFigure = {
    start: { opacity: 1, scale: 1 },
    stop: { opacity: 0, scale: 0 },
  };

  return (
    <motion.ul
      layout
      className={classes.figures}
      style={{ gridTemplateColumns: `repeat(${numberColumns}, 1fr)` }}
    >
      <AnimatePresence>
        {listFigures.map((f) => (
          <motion.li
            layout
            variants={variantsAnimateFigure}
            initial={'stop'}
            animate={'start'}
            exit={'stop'}
            transition={{ duration: 0.5 }}
            key={f.id}
          >
            <Figure {...f} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
export { Figures };
