import { EPagesRoutes } from '@/constants/router';
import { useAppDispatch } from '@/hooks/store';
import { getProductListAction } from '@/store/productList/thunk';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import Input from '../common/Input';
import cx from './index.module.scss';
import SearchFilter from './SearchFilter';
import SearchList from './SearchList';
import closeIcon from '@/static/icons/close.svg';

const SearchLayout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [value, setValue] = useState(router.query.search);
  const onChangeInput = (event: any) => {
    router.push(`${EPagesRoutes.SearchResult}?search=${event.target.value}`);
    setValue(event.target.value);
  };
  const onClickCloseSearch = () => {
    router.query.search = '';
    setValue('');
    router.push(`${EPagesRoutes.SearchResult}`);
  };

  useEffect(() => {
    // router.query.search
    dispatch(getProductListAction());
  }, []);

  return (
    <div className={cx.wrapper}>
      <div className={cx.search_input}>
        <Input onChange={onChangeInput} value={value} />
        <Image
          onClick={onClickCloseSearch}
          src={closeIcon}
          alt="Close search"
        />
      </div>

      <Heading>
        {router.query.search
          ? `По запросу "${router.query.search}" найдено 145 товаров`
          : 'Ничего не найдено'}
      </Heading>

      <div className={cx.search_result}>
        <SearchFilter />
        {router.query.search ? <SearchList /> : ''}
      </div>
    </div>
  );
};

export default SearchLayout;
