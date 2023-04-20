import Heading from '@/components/common/Heading';
import { EPagesRoutes } from '@/constants/router';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import cx from './index.module.scss';

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
          <Heading tag="h4">товары {dataBasket.ware} шт:</Heading>
          <Heading tag="h4">{dataBasket.sum} ₽</Heading>
        </div>
        <div className={cx.block_flex_order}>
          <Heading tag="h4">скидка:</Heading>
          <Heading tag="h4">-{dataBasket.deduction} ₽</Heading>
        </div>
        <div className={cx.block_flex_order}>
          <Heading tag="h4">доставка:</Heading>
          <Heading tag="h4">{dataBasket.delivery}</Heading>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
