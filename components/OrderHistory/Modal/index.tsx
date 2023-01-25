import { Skeleton } from 'antd';
import { useEffect } from 'react';

import Modal from '@/components/common/Modal';
import DetailItem from '@/components/OrderHistory/DetailItem';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
  getOrderDetailDataSource,
  getOrderDetailIsLoading,
} from '@/store/orderHistory/selector';
import { getOrderDetailAction } from '@/store/orderHistory/thunk';

interface IModalProps {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  orderId: string;
}

const OrderHistoryModal = ({ isVisible, setVisible, orderId }: IModalProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getOrderDetailIsLoading);
  const dataSource = useAppSelector(getOrderDetailDataSource);

  useEffect(() => {
    dispatch(getOrderDetailAction({ orderId }));
  }, []);

  return (
    <Modal isVisible={isVisible} onClose={() => setVisible(false)}>
      {isLoading && <Skeleton active />}
      {dataSource.map((i) => (
        <DetailItem {...i} key={i.id} />
      ))}
    </Modal>
  );
};

export default OrderHistoryModal;
