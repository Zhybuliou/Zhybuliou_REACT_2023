import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reduxReducer';
import goodsApi from './goodsApi';

const store = configureStore({
  reducer: {
    from: formReducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
