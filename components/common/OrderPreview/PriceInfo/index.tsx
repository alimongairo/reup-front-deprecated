import { TProductItem } from '@/store/productList/type';
import { TBasketItem } from '@/store/basket/type';
import { getBasketTotalPrice } from '@/components/Basket/helpers';

import cx from './index.module.scss';

interface IProps {
  products: TProductItem[];
  basket: TBasketItem[];
}

const PriceInfo = ({ products, basket }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.infoRow}>
        <div className={cx.title}>товары 10 шт:</div>
        {/* <div className={cx.dashed}></div> */}
        <div className={cx.price}>
          {getBasketTotalPrice(basket, products)}&nbsp;₽
        </div>
      </div>

      <div className={cx.infoRow}>
        <div className={cx.title}>скидка:</div>
        {/* <div className={cx.dashed}></div> */}
        <div className={cx.price}>-2000 ₽</div>
      </div>

      <div className={cx.infoRow}>
        <div className={cx.title}>доставка:</div>
        <div className={cx.price}>
          {/* {getBasketTotalPrice(basket, products)}&nbsp;₽ */}
          бесплатно
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
