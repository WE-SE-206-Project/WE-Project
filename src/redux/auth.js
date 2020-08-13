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
      state.auth = payload.auth,
        state.user = payload.user,
        state.company = payload.company
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
      state.auth = payload.auth;
      localStorage.setItem("auth", JSON.stringify(payload.auth))
    },
    setUser: (state, { payload }) => {
      state.user = payload.user;
      localStorage.setItem("user", JSON.stringify(payload.user))
    },
    setCompany: (state, { payload }) => {
      state.company = payload.company;
      localStorage.setItem("company", JSON.stringify(payload.company))
    }
  }
})

export default slice.reducer;

export {
  login,
  logout,
  setAuth,
  setCompany,
  setUser
}