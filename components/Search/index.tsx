import { useRouter } from 'next/router';

import Input from '@/components/common/Input';
import Heading from '@/components/common/Heading';
import FiltersForProducts from '@/components/common/FiltersForProducts';
import ProductFeed from '@/components/ProductFeed';
import { TFilterData } from '@/components/common/FiltersForProducts/context';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';
import { getJSDocThisTag } from 'typescript';

const SearchLayout = () => {
  const router = useRouter();
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(EPagesRoutes.SearchResult + '?search=' + e.target.value);
  };

  const onChangeFilters = (data: TFilterData) => {
    console.log(data);
  };

  return (
    <div className={cx.wrapper}>
      <Input
        className={cx.input}
        value={router.query.search}
        onChange={onChangeSearch}
        placeholder="Search..."
      />
      <Heading tag="h2">
        По запросу{' '}
        {router.query.search?.length ? `“${router.query.search}”` : ''}найдено
        145 товаров
      </Heading>
      <div className={cx.content}>
        <FiltersForProducts onChange={onChangeFilters} />
        <ProductFeed />
      </div>
    </div>
  );
};

export default SearchLayout;
