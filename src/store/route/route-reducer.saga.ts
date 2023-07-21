import { createAction } from '@reduxjs/toolkit';
import { getWaypointsApi } from '../../api/get-waypoints-api';
import { put } from 'redux-saga/effects';
import { setWaypoints } from './route-reducer.slice';
import { notification } from 'antd';


export function* getWaypoints(action: GetGeometryActionType): Generator {
  const { coords } = action.payload;
  const payload = yield getWaypointsApi(coords)
    .then(response => response.json())
    .then((data) => {
      return data.routes[0].geometry;
    })
    .catch(() => {
      notification.error({
        message: 'Ошибка',
        description:
          'Произошла ошибка при запросе на сервис'
      });
    });
  yield put(setWaypoints(payload));
}

export const GET_WAYPOINTS = 'routes/getWaypoints';
export const getGeometry = createAction(GET_WAYPOINTS, (coords: string) => ({
  payload: { coords }
}));

export type GetGeometryActionType = ReturnType<typeof getGeometry>

