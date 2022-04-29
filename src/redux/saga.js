import { call, takeEvery, put } from "redux-saga/effects";
import { setImages } from "./reducers/imageSlice";
import { sagaActions } from "./sagaActions";
import { getAllData } from "../utils/getData";

export function* fetchDataSaga() {
  try {
    let result = yield call(() => getAllData());
    yield put(setImages(result.data));
  } catch (e) {
    yield put({ type: "IMAGES_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_IMAGES_SAGA, fetchDataSaga);
}
