import { EPagesRoutes } from '@/constants/router';
import { useAppDispatch } from '@/hooks/store';
import { getProductListAction } from '@/store/productList/thunk';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import Input from '../common/Input';
import SearchFilter from './SearchFilter';
import SearchList from './SearchList';
import cx from './index.module.scss';

const CategoryLayout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [value, setValue] = useState(router.query.search);

  const onChangeInput = (event: any) => {
    router.push(`${EPagesRoutes.SearchResult}?search=${event.target.value}`);
    setValue(event.target.value);
  };

  useEffect(() => {
    // router.query.search
    dispatch(getProductListAction());
  }, []);

  return (
    <div className={cx.wrapper}>
      <div className={cx.banner}>
        <img src="../../static/img/Banner.png" />
      </div>

      <div className={cx.search_result}>
        <SearchFilter />
        <SearchList />
      </div>
    </div>
  );
};

export default CategoryLayout;
