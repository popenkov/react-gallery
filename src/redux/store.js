import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./reducers/imageSlice";
import createSagaMiddleware from "redux-saga";
import saga, { fetchImageWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    images: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(fetchImageWatcher);
