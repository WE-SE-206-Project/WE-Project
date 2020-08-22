import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const slice = createSlice({
  name: 'auth',
  initialState: {
    auth: {
      status: false,
      token: null
    },
    user: {},
    company: {}
  },
  reducers: {
    login: (state, { payload }) => {
      state.auth = payload.auth;
      state.user = payload.user;
      state.company = payload.company;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      localStorage.removeItem("company");
      state.auth = { status: false, token: null };
      state.user = {};
      state.company = {};
    },
    setAuth: (state, { payload }) => {
      state.auth = payload;
      // localStorage.setItem("auth", JSON.stringify(payload))
    },
    setUser: (state, { payload }) => {
      state.user = payload;
      // localStorage.setItem("user", JSON.stringify(payload))
    },
    setCompany: (state, { payload }) => {
      state.company = payload;
      // localStorage.setItem("company", JSON.stringify(payload))
    }
  }
})

export default slice.reducer;

export const {
  login,
  logout,
  setAuth,
  setCompany,
  setUser
} = slice.actions