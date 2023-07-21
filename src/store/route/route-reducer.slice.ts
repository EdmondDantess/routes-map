import { createSlice } from '@reduxjs/toolkit';
import { routesDataConstants } from '../../utils/constants/routes-data.constants';


export const routeSlice = createSlice({
  name: 'routes',
  initialState: routesDataConstants,
  reducers: {
    setCurrentNumRoute: (state, action) => {
      state.currentRoute.numRoute = action.payload;
    },
    setWaypoints: (state, action) => {
      state.currentRoute.polyline = action.payload;
    }
  }
});

export const { setCurrentNumRoute, setWaypoints } = routeSlice.actions;

export default routeSlice.reducer;