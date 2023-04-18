import DataOrder from './DataOrder';
import OrderSummary from './OrderSummary';
import TitleOrder from './TitleOrder';
import cx from './index.module.scss';

export interface IPropsOrder {
  isLogined: boolean;
}

const OrderLayout = ({ isLogined }: IPropsOrder) => {
  return (
    <div className={cx.wrapper}>
      <TitleOrder />
      <div className={cx.mainContentOrder}>
        <DataOrder isLogined />
        <OrderSummary />
      </div>
    </div>
  );
};

export default OrderLayout;
