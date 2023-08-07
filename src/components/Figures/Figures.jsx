import { useSelector } from 'react-redux';
import { Figure } from './Figure/Figure';
import classes from './Figures.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

function Figures() {
  const { figures, color, forms, brightness, numberColumns } = useSelector(
    (store) => store.app
  );

  const listFigures =
    brightness === 'dark'
      ? figures.filter((f) => color[f.color] && forms[f.form] && f.dark)
      : brightness === 'light'
      ? figures.filter((f) => color[f.color] && forms[f.form] && !f.dark)
      : figures.filter((f) => color[f.color] && forms[f.form]);

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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
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
