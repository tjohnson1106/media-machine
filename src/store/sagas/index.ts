import { all, call, put } from "redux-saga/effects";

export default function*() {
  yield all([]);
}

export function* fetchEntity(request: any, entity: any, ...args: any[]) {
  try {
    const response = yield call(request);
    yield put(entity.success(response.result, ...args));
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}
