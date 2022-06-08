import {all, spawn} from 'redux-saga/effects';
import {driversSaga} from './drivers';

export default function* rootSaga() {
  const sagas = [driversSaga];

  yield all(sagas.map((s) => spawn(s)));
}
