import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'unauth',
  initialState: {
    role: 'user'
  },
  reducers: {
    setRole: (state, { payload }) => {
      state.role = payload;
    }
  }
})

export const {
  setRole
} = slice.actions;

export default slice.reducer;