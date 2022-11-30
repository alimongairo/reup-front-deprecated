import { useEffect } from 'react';

import EmptyBasket from '@/components/common/EmptyBasket';
import BasketProductCard from '@/components/Basket/BasketItems/BasketProductCard';
import BasketBuyButton from '@/components/Basket/BasketItems/BasketBuyButton';

import {
  getBasketDataSource,
  getBasketErrLoading,
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

  const { error, loading } = useAppSelector(getBasketErrLoading); //TODO: check errors fetch products

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return error || loading ? (
    <div>{error?.message || 'loading..'}</div>
  ) : !basketItems || basketItems.length === 0 ? (
    <EmptyBasket />
  ) : (
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
