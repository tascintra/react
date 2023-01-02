import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    reducers: {
      changeUser(state, { payLoad }) {
        return { ...state, name: payLoad };
      },
    },
  },
});

export const { changeUser } = slice.actions;

export default slice.reducer;
