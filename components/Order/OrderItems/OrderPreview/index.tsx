import { Affix } from 'antd';

import EmptyBasket from '@/components/common/EmptyBasket';
import ProductImages from '@/components/Order/OrderItems/OrderPreview/ProductImages';
import PriceInfo from '@/components/Order/OrderItems/OrderPreview/PriceInfo';
import FirstRow from '@/components/Order/OrderItems/OrderPreview/FirstRow';

import { TProductItem } from '@/store/productList/type';
import { TBasketStore } from '@/store/basket/type';

import cx from './index.module.scss';

interface IProps {
  products: TProductItem[];
  basket: TBasketStore['dataSource'];
}

const OrderPreview = ({ products, basket }: IProps) => {
  return (
    <Affix offsetTop={32}>
      <div className={cx.wrapper}>
        {!basket || basket.length === 0 ? (
          <EmptyBasket />
        ) : (
          <>
            <FirstRow />

            <div className={cx.content}>
              <ProductImages basket={basket} products={products} />

              <PriceInfo basket={basket} products={products} />
            </div>
          </>
        )}
      </div>
    </Affix>
  );
};

export default OrderPreview;
