import { useDispatch, useSelector } from 'react-redux';
import classes from './Burger.module.scss';
import { toggleToolbarDisplay } from '../../redux/slices/figuresSlices';
import { motion } from 'framer-motion';

function Burger() {
  const dispatch = useDispatch();
  const isShowToolbar = useSelector((state) => state.app.isShowToolbar);
  const variantsBurger = {
    rotate: { rotate: 90 },
    stop: { rotate: 0 },
  };
  return (
    <motion.div
      className={classes.burger}
      onClick={() => dispatch(toggleToolbarDisplay())}
      variants={variantsBurger}
      animate={isShowToolbar ? 'rotate' : 'stop'}
      transition={{ duration: 0.5 }}
    >
      <span></span>
      <span></span>
      <span></span>
    </motion.div>
  );
}
export { Burger };
