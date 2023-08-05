import { configureStore } from '@reduxjs/toolkit';
import figuresReducer from './slices/figuresSlices';

export default configureStore({
  reducer: {
    app: figuresReducer,
  },
});
