import authReducer from './auth';
import unauthReducer from './unauth';
import dashboardReducer from './dashboard'
import { configureStore } from '@reduxjs/toolkit';


export default configureStore({
  reducer: {
    auth: authReducer,
    unauth: unauthReducer,
    dashboard: dashboardReducer
  }
})