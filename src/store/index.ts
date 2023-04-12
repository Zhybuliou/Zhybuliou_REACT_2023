import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reduxReducer';

const store = configureStore({
  reducer: {
    from: formReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
