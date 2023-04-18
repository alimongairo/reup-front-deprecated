import TitleOrder from './TitleOrder';
import cx from './index.module.scss';

interface IProps {
  isLogined: boolean;
}

const OrderLayout = ({ isLogined }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <TitleOrder />
    </div>
  );
};

export default OrderLayout;
