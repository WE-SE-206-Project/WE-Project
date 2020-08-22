import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';


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
      // console.log({ payload })
      if (payload.auth.token) {
        api.defaults.headers.common["Authorization"] = payload.auth.token;
        // console.log(api.defaults.headers.common["Authorization"]);

        // console.log("WORKING")
      }
    },
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      localStorage.removeItem("company");
      delete api.defaults.headers.common["Authorization"]
      state.auth = { status: false, token: null };
      state.user = {};
      state.company = {};
    },
    setAuth: (state, { payload }) => {
      state.auth = payload;

      if (payload.token) {
        api.defaults.headers.common["Authorization"] = payload.token;
      }
      localStorage.setItem("auth", JSON.stringify(payload))
    },
    setUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload))
    },
    setCompany: (state, { payload }) => {
      state.company = payload;
      localStorage.setItem("company", JSON.stringify(payload))
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