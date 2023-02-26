import { EPagesRoutes } from '@/constants/router';
import { useAppDispatch } from '@/hooks/store';
import { getProductListAction } from '@/store/productList/thunk';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Heading from '../common/Heading';
import Input from '../common/Input';
import cx from './index.module.scss';
import SearchFilter from './SearchFilter';
import SearchList from './SearchList';

const SearchLayout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onChangeInput = (event: any) => {
    router.push(`${EPagesRoutes.SearchResult}?search=${event.target.value}`);
  };

  useEffect(() => {
    // router.query.search
    dispatch(getProductListAction());
  }, []);

  return (
    <div className={cx.wrapper}>
      <div className={cx.search_input}>
        <Input onChange={onChangeInput} value={router.query.search} />
      </div>

      <Heading>
        По запросу {`"${router.query.search}"`} найдено 145 товаров
      </Heading>

      <div className={cx.search_result}>
        <SearchFilter />
        <SearchList />
      </div>
    </div>
  );
};

export default SearchLayout;
