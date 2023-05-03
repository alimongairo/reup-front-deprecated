import { EPagesRoutes } from '@/constants/router';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import cx from './index.module.scss';

const TextCompleted = () => {
  const router = useRouter();

  const toMain = () => {
    router.push(EPagesRoutes.Main);
  };

  const toOrderHistory = () => {
    router.push(EPagesRoutes.OrderHistory);
  };

  return (
    <div className={cx.mainCompletedOrder}>
      <Heading tag="h2">ваш заказ оформлен!</Heading>
      <div className={cx.textCompletedOrder}>
        <Text size="thin">
          подробности заказа вы можете посмотреть в разделе{' '}
          <span onClick={toOrderHistory}>мои заказы</span>{' '}
        </Text>
      </div>
      <div className={cx.clickBtnMain}>
        <Button onClick={toMain}>
          <Text size="big">продолжить покупки</Text>
        </Button>
      </div>
    </div>
  );
};

export default TextCompleted;
