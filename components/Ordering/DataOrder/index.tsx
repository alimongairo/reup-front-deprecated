import { IPropsOrder } from '..';
import AddressDelivery from './AddressDelivery';
import PersonalData from './PersonalData';
import cx from './index.module.scss';

const DataOrder = ({ isLogined }: IPropsOrder) => {
  return (
    <div className={cx.wrapperDataOrder}>
      <AddressDelivery />
      <PersonalData />
    </div>
  );
};

export default DataOrder;
