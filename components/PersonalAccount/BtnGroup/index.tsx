import Button from '@/components/common/Button';
import cx from './index.module.scss';

const BtnGroup = () => {
  return (
    <div className={cx.btnGroupwrapper}>
      <div className={cx.btnOneColumn}>
        <Button className={cx.onebtnOneColumn}>настройки</Button>
        <Button className={cx.twobtnOneColumn}>возвраты</Button>
      </div>
      <div className={cx.btnTwoColumn}>
        <Button className={cx.onebtnTwoColumn}>избранное</Button>
        <Button className={cx.twobtnTwoColumn}>стать продавцом</Button>
      </div>
      <div className={cx.btnThreeColumn}>
        <Button className={cx.onebtnThreeColumn}>мои заказы</Button>
        <Button className={cx.twobtnThreeColumn}>мои данные</Button>
      </div>
    </div>
  );
};

export default BtnGroup;
