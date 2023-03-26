import { useRouter } from 'next/router';

import Heading from '@/components/common/Heading';
import Text from 'components/common/Text';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

const Summary = () => {
  const router = useRouter();

  const goToOrder = () => {
    router.push(EPagesRoutes.Order);
  };

  return (
    <div className={cx.wrapper}>
      <div className={cx.row}>
        <Heading tag={'h3'}>итого:</Heading>
        <Heading tag={'h3'}>10 000 ₽</Heading>
      </div>
      <div className={cx.row}>
        <Text>товары 10 шт:</Text>
        <Text size={'thin'}>12 000 ₽</Text>
      </div>
      <div className={cx.row}>
        <Text>скидка:</Text>
        <Text size={'thin'}>-2 000 ₽</Text>
      </div>
      <div className={cx.row}>
        <Text>доставка:</Text>
        <Text size={'thin'}>бесплатно</Text>
      </div>
      <Input theme="grey" placeholder={'введите промокод'} />
      <Button onClick={goToOrder}>Оформить заказ</Button>
    </div>
  );
};

export default Summary;
