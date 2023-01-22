import { useEffect } from 'react';
import { Skeleton, Space } from 'antd';
import { useRouter } from 'next/router';

import Heading from '@/components/common/Heading';
import OrderItem from '@/components/OrderHistory/OrderItem';

import { getOrderHistoryAction } from '@/store/orderHistory/thunk';
import {
  getOrderHistoryDataSource,
  getOrderHistoryIsLoading,
} from '@/store/orderHistory/selector';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { EPagesRoutes } from '@/constants/router';

interface IProps {
  isActive: boolean;
}

const Orders = ({ isActive }: IProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLoading = useAppSelector(getOrderHistoryIsLoading);
  const dataSource = useAppSelector(getOrderHistoryDataSource);

  const goToMainPage = () => {
    router.push(EPagesRoutes.Main);
  };

  useEffect(() => {
    dispatch(getOrderHistoryAction(isActive));
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  if (!dataSource.length) {
    return (
      <Space direction="vertical" size="large">
        <Heading size="medium">
          Здесь пока нет заказов. Может, Вы еще не нашли то, что искали?
        </Heading>
        <button onClick={goToMainPage}>отправиться на поиски</button>
      </Space>
    );
  }

  return (
    <>
      {dataSource.map((item) => (
        <OrderItem key={item.id} {...item} isClosed={!isActive} />
      ))}
    </>
  );
};

export default Orders;
