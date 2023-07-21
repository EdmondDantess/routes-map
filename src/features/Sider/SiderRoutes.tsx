import React from 'react';
import './siderRiutes.scss';
import Sider from 'antd/es/layout/Sider';
import { useSelector } from 'react-redux';
import { setCurrentNumRoute } from '../../store/route/route-reducer.slice';
import { useStoreDispatch } from '../../utils/types';
import { Button, Menu } from 'antd';
import { selectCurNumRoute, selectRoutes } from '../../store/selectors';

export const SiderRoutes = () => {
  const routes = useSelector(selectRoutes);
  const curNumRoute = useSelector(selectCurNumRoute);

  const dispatch = useStoreDispatch();

  const setCurrentRouteHandler = (index: number) => {
    dispatch(setCurrentNumRoute(index));
  };

  return (
    <Sider
      width={125}
      className={'sider'}
    >
      <Menu theme='dark'
            defaultSelectedKeys={[`${curNumRoute + 1}`]}
            items={routes.map(
              (el, index) => (
                {
                  key: String(index + 1),
                  label: `Маршрут №${index + 1}`,
                  onClick: () => setCurrentRouteHandler(index)
                })
            )}
            className={'sider__menu'}
      />
      <Button type={'primary'} size={'small'} className={'sider__link'}>
        <a href='https://github.com/EdmondDantess/routes-map'>Смотреть код</a>
      </Button>
    </Sider>
  );
};
