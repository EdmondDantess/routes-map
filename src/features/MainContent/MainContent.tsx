import React from 'react';
import './main-content.scss';
import 'leaflet/dist/leaflet.css';
import { Content } from 'antd/es/layout/layout';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useSelector } from 'react-redux';
import { RouteBuilder } from './RouteBuilder/RouteBuilder';
import { selectCurNumRoute, selectMarks } from '../../store/selectors';


export const MainContent = () => {

  const marks = useSelector(selectMarks);
  const curNumRoute = useSelector(selectCurNumRoute);
  const customIcon = new Icon({
    iconUrl: require('../../assets/img/marker.png'),
    iconSize: [38, 38]
  });

  return (
    <Content className={'main-content'}>
      <MapContainer zoomControl
                    scrollWheelZoom>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {
          marks[curNumRoute].marks.map((e, i) => {
            return <Marker position={{ lat: e[0], lng: e[1] }} key={i} icon={customIcon}>
              <Popup>
                Маршрут №{curNumRoute + 1} <br />
                Точка №{i + 1}
              </Popup>
            </Marker>;
          })
        }
        <RouteBuilder />
      </MapContainer>
    </Content>
  );
};
