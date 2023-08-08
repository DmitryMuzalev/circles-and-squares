import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../config';

export const fetchFigures = createAsyncThunk(
  'figures/fetchFigures',
  async () => {
    const response = await fetch(URL);
    const figures = await response.json();
    return figures.map((f, i) => {
      f.color = ['yellow', 'blue', 'red', 'green'].includes(f.color)
        ? f.color
        : 'red';
      f.form = ['square', 'circle'].includes(f.form) ? f.form : 'square';
      return { ...f, id: i };
    });
  }
);

const figuresSlices = createSlice({
  name: 'figures',
  initialState: {
    figures: [],
    status: null,
    error: null,
    filters: {
      forms: {
        square: {
          title: 'квадрат',
          value: true,
        },
        circle: {
          title: 'круг',
          value: true,
        },
      },
      colors: {
        yellow: {
          title: 'жёлтый',
          value: true,
        },
        green: {
          title: 'зелёный',
          value: true,
        },
        red: {
          title: 'красный',
          value: true,
        },
        blue: {
          title: 'синий',
          value: true,
        },
      },
      brightness: {
        currentValue: 'all',
        variants: [
          { title: 'все', value: 'all' },
          { title: 'тёмные', value: 'dark' },
          { title: 'светлые', value: 'light' },
        ],
      },
    },
    isShowToolbar: false,
    numberColumns: 4,
  },
  reducers: {
    toggleCheckFilter: (state, action) => {
      const { name, item } = action.payload;
      state.filters[name][item].value = !state.filters[name][item].value;
    },
    toggleRadioFilter: (state, action) => {
      const { name, item } = action.payload;
      state.filters[name].currentValue = item;
    },
    toggleToolbarDisplay: (state) => {
      state.isShowToolbar = !state.isShowToolbar;
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
  toggleCheckFilter,
  toggleRadioFilter,
  toggleToolbarDisplay,
  changeNumberColumns,
} = figuresSlices.actions;

export default figuresSlices.reducer;
