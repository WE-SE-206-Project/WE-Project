import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'dashboard',
  initialState: {
    users: [],
    companies: [],
    appointments: []
  },
  reducers: {
    setDashboard: (state, { payload }) => {
      state.users = payload.users;
      state.companies = payload.companies;
      state.appointments = payload.appointments;
    },
    setAppointments: (state, { payload }) => {
      state.appointments = payload;
    },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setCompanies: (state, { payload }) => {
      state.companies = payload;
    }
  }
})

export const {
  setDashboard,
  setAppointments,
  setUsers,
  setCompanies
} = slice.actions;

export default slice.reducer;