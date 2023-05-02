import { IPropsOrderLogined } from '..';
import { TOrderData } from '../context';
import AddressDelivery from './AddressDelivery';
import PersonalData from './PersonalData';
import cx from './index.module.scss';

const DataOrder = ({ isLogined }: IPropsOrderLogined) => {
  const onChangeData = (data: TOrderData) => {
    console.log(data);
  };

  return (
    <div className={cx.wrapperDataOrder}>
      <AddressDelivery />
      <PersonalData onChange={onChangeData} />
    </div>
  );
};

export default DataOrder;
