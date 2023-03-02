import Link from 'next/link';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

interface IProps {
  truePrice: number;
  oldPrice: number;
  count: number;
}

const BasketSummary = ({ truePrice, oldPrice, count }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.total}>
        <div>итого:</div>
        <div>{truePrice} ₽</div>
      </div>

      <div className={cx.priceDetails}>
        <div>
          <div>товары {count} шт:</div>
          <div>{oldPrice} ₽</div>
        </div>
        <div>
          <div>скидка:</div>
          <div>-{oldPrice - truePrice} ₽</div>
        </div>
        <div>
          <div>доставка:</div>
          <div>бесплатно</div>
        </div>
      </div>

      <input
        type="text"
        className={cx.promo}
        placeholder="введите промокод"
      ></input>

      <Link href={`${EPagesRoutes.Order}`}>
        <button className={cx.checkoutBtn}>оформить заказ</button>
      </Link>
    </div>
  );
};

export default BasketSummary;
