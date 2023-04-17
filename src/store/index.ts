import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reduxReducer';
import searchReducer from './sliceSearchReducer';
import goodsApi from './goodsApi';

const store = configureStore({
  reducer: {
    from: formReducer,
    search: searchReducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
