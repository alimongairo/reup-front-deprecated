import Button from '@/components/common/Button';
import { IPropsOrder } from '..';
import AddressDelivery from './AddressDelivery';
import PersonalData from './PersonalData';
import cx from './index.module.scss';

const DataOrder = ({ isLogined }: IPropsOrder) => {
  return (
    <div className={cx.wrapperDataOrder}>
      <AddressDelivery />
      <PersonalData />
      <Button>Оформить заказ</Button>
    </div>
  );
};

export default DataOrder;
