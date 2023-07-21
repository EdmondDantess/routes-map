import { AppRootStateType } from '../utils/types';

export const selectCurNumRoute = ((state: AppRootStateType) => state.routes.currentRoute.numRoute);
export const selectMarks = ((state: AppRootStateType) => state.routes.routes);
export const selectPolyline = ((state: AppRootStateType) => state.routes.currentRoute.polyline);
export const selectRoutes = (state: AppRootStateType) => state.routes.routes;
