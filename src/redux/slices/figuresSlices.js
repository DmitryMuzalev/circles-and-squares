import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../config';

export const fetchFigures = createAsyncThunk(
  'figures/fetchFigures',
  async () => {
    const response = await fetch(URL);
    const figures = await response.json();
    return figures.map((f, i) => ({ ...f, id: i }));
  }
);

const figuresSlices = createSlice({
  name: 'figures',
  initialState: {
    figures: [],
    status: null,
    error: null,
    forms: {
      square: true,
      circle: true,
    },
    color: {
      yellow: true,
      green: true,
      red: true,
      blue: true,
    },
    brightness: 'all',
    isShowToolbar: false,
    numberColumns: 4,
  },
  reducers: {
    toggleColor: (state, action) => {
      state.color[action.payload] = !state.color[action.payload];
    },
    toggleForm: (state, action) => {
      state.forms[action.payload] = !state.forms[action.payload];
    },
    toggleToolbarDisplay: (state) => {
      state.isShowToolbar = !state.isShowToolbar;
    },
    changeBrightness: (state, action) => {
      state.brightness = action.payload;
    },
    changeNumberColumns: (state, action) => {
      state.numberColumns = action.payload;
    },
  },
  extraReducers: {
    [fetchFigures.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchFigures.fulfilled]: (state, action) => {
      state.status = 'successfully';
      state.error = null;
      state.figures = action.payload;
    },
    [fetchFigures.rejected]: (state) => {
      state.status = 'unsuccessfully';
      state.error = 'Server error';
    },
  },
});

export const {
  toggleColor,
  toggleForm,
  changeBrightness,
  toggleToolbarDisplay,
  changeNumberColumns,
} = figuresSlices.actions;

export default figuresSlices.reducer;