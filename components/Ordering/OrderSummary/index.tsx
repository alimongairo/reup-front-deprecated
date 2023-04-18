import Heading from '@/components/common/Heading';
import classNames from 'classnames';
import cx from './index.module.scss';
import Text from '@/components/common/Text';
import { useRouter } from 'next/router';
import { EPagesRoutes } from '@/constants/router';

const OrderSummary = () => {
  const dataBasket = {
    ware: 10,
    sum: 12000,
    deduction: 2000,
    delivery: 'бесплатно',
    //запрос на бэк
  };

  const router = useRouter();

  const toBasket = () => {
    router.push(EPagesRoutes.Basket);
  };

  return (
    <div className={cx.wrapperOrderSummary}>
      <div className={cx.orderSummaryBlock}>
        <div className={classNames(cx.block_flex_title, cx.block_flex_order)}>
          <Heading tag="h3">ваш заказ:</Heading>
          <Heading onClick={toBasket} className={cx.change} tag="h4">
            изменить
          </Heading>
        </div>
        <div className={cx.block_flex_order}>
          <Text size="thin">товары {dataBasket.ware} шт:</Text>
          <Text size="thin">{dataBasket.sum} ₽</Text>
        </div>
        <div className={cx.block_flex_order}>
          <Text size="thin">скидка:</Text>
          <Text size="thin">-{dataBasket.deduction} ₽</Text>
        </div>
        <div className={cx.block_flex_order}>
          <Text size="thin">доставка:</Text>
          <Text size="thin">{dataBasket.delivery}</Text>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
