import { useEffect } from 'react';
import { Figures } from './components/Figures/Figures';
import { Header } from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFigures } from './redux/slices/figuresSlices';
import { Toolbar } from './components/Toolbar/Toolbar';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const dispatch = useDispatch();
  const isShowToolbar = useSelector((state) => state.app.isShowToolbar);
  useEffect(() => {
    dispatch(fetchFigures());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Figures />
      <AnimatePresence>
        {isShowToolbar && (
          <motion.div
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: '-100%' }}
            transition={{ duration: 0.5 }}
            className="toolbar"
          >
            <Toolbar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
