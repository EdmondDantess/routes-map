import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { GET_WAYPOINTS, getWaypoints } from './route/route-reducer.saga';
import routeSlice from './route/route-reducer.slice';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_WAYPOINTS, getWaypoints);
}

export const rootReducer = combineReducers({
  routes: routeSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

