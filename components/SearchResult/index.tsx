import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';
import React, { useEffect } from 'react';
import Heading from '../common/Heading';
import cx from './index.module.scss';
import SearchFilter from './SearchFilter';
import SearchList from './SearchList';

const SearchLayout = () => {
  const searchValue = 'Лэйди';
  const dispatch = useAppDispatch();
  const searchProducts = useAppSelector(getProductListDataSource);

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <div className={cx.wrapper}>
      <div className={cx.search_input}>
        <input type="search" value={searchValue} />
      </div>

      <Heading>По запросу {`"${searchValue}"`} найдено 145 товаров</Heading>

      <div className={cx.search_result}>
        <SearchFilter />
        <SearchList searchProducts={searchProducts} />
      </div>
    </div>
  );
};

export default SearchLayout;
