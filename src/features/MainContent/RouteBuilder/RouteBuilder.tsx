import React from 'react';
import { Polyline, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { useStoreDispatch } from '../../../utils/types';
import { getGeometry } from '../../../store/route/route-reducer.saga';
import { decode } from 'polyline';
import { useEffect } from 'react';
import { selectCurNumRoute, selectMarks, selectPolyline } from '../../../store/selectors';
import L, { LatLngExpression } from 'leaflet';


export const RouteBuilder = () => {
  const curNumRoute = useSelector(selectCurNumRoute);
  const marks = useSelector(selectMarks);
  const polyline = useSelector(selectPolyline);
  const markers = marks[curNumRoute].marks as LatLngExpression[];

  const dispatch = useStoreDispatch();
  const map = useMap();

  const coordsForRequest = () => {
    let text = '';
    marks[curNumRoute].marks.forEach(t => {
      text += `${t[1]},${t[0]};`;
    });
    return text.slice(0, -1);
  };

  useEffect(() => {
    dispatch(getGeometry(coordsForRequest()));
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(marker => marker));
      map.fitBounds(bounds);
    }
  }, [markers, map, curNumRoute]);

  return <Polyline positions={polyline ? decode(polyline) as LatLngExpression[] : []} />;
};
