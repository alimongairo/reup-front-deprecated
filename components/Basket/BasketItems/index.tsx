import { useEffect } from 'react';
import { Skeleton } from 'antd';

import EmptyBasket from '@/components/common/EmptyBasket';
import BasketProductCard from '@/components/Basket/BasketItems/BasketProductCard';
import BasketBuyButton from '@/components/Basket/BasketItems/BasketBuyButton';

import {
  getBasketDataSource,
  getBasketLoading,
} from '@/store/basket/selectors';
import { getProductListAction } from '@/store/productList/thunk';
import { getProductListDataSource } from '@/store/productList/selectors';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getBasketTotalPrice } from '@/helpers/getBasketTotalPrice';

import cx from './index.module.scss';

const BasketProductList = () => {
  const dispatch = useAppDispatch();

  const allProducts = useAppSelector(getProductListDataSource); //TODO: fetch by ids
  const basketItems = useAppSelector(getBasketDataSource);

  const loading = useAppSelector(getBasketLoading); //TODO: check errors fetch products

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  if (loading) {
    return <Skeleton active />;
  }

  if (!basketItems?.length) {
    return <EmptyBasket />;
  }

  return (
    <>
      <div className={cx.basketProductList}>
        {basketItems.map((product) => {
          if (product.amount)
            return (
              <BasketProductCard
                product={allProducts[product.productId]}
                amount={product.amount}
                key={product.productId}
              />
            );
        })}
      </div>
      <BasketBuyButton total={getBasketTotalPrice(basketItems, allProducts)} />
    </>
  );
};

export default BasketProductList;
