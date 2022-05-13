import { call, takeEvery, put, all } from "redux-saga/effects";
import {
  setImages,
  setSingleImage,
  setCertainImages,
} from "./reducers/imageSlice";
import { sagaActions } from "./sagaActions";
import { getAllData, getCertainImg, getCertainData } from "../utils/getData";

export function* fetchDataSagaWorker() {
  try {
    let result = yield call(() => getAllData());
    yield put(setImages(result.data));
  } catch (e) {
    yield put({ type: "IMAGES_FETCH_FAILED" });
  }
}
export function* fetchSingleImageSagaWorker(action) {
  try {
    let result = yield call(() => getCertainImg(action.args));
    yield put(setSingleImage(result.data));
  } catch (e) {
    yield put({ type: "IMAGES_FETCH_FAILED" });
  }
}
export function* fetchImagesByCategoryDataSagaWorker(action) {
  try {
    let result = yield call(() => getCertainData(action.args));
    yield put(setCertainImages(result.data.results));
  } catch (e) {
    console.log(e);
    yield put({ type: "IMAGES_FETCH_FAILED" });
  }
}

export function* fetchImageWatcher() {
  yield takeEvery(sagaActions.FETCH_IMAGES_SAGA, fetchDataSagaWorker);
  yield takeEvery(sagaActions.FETCH_IMAGE_SAGA, fetchSingleImageSagaWorker);
  yield takeEvery(
    sagaActions.FETCH_IMAGES_BY_CATEGORY_SAGA,
    fetchImagesByCategoryDataSagaWorker
  );
}

export default function* rootSaga() {
  yield all([fetchImageWatcher()]);
}
