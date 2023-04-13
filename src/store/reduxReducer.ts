import { createSlice } from '@reduxjs/toolkit';
import { IFormCard } from '../types/types';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    form: [] as IFormCard[],
  },
  reducers: {
    addForm(state, action) {
      state.form.push({
        imageUrl: action.payload.imageUrl,
        name: action.payload.name,
        data: action.payload.data,
        select: action.payload.select,
        radio: action.payload.radio,
        check: action.payload.check,
      });
    },
    // removeForm(state, action) {
    //   console.log('delete', state);
    // },
  },
});

export const { addForm } = formSlice.actions;
export default formSlice.reducer;
