import { useState } from 'react';
import { useRouter } from 'next/router';

import Input from '@/components/common/Input';
import Heading from '@/components/common/Heading';
import FiltersForProducts from '@/components/common/FiltersForProducts';
import ProductFeed from '@/components/ProductFeed';
import { TFilterData } from '@/components/common/FiltersForProducts/context';
import MobileFilters from '@/components/common/MobileFilters';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';
import { useWindowSize } from '@/hooks/useWindow';

const SearchLayout = () => {
  const windowSize = useWindowSize();
  const router = useRouter();

  const [visibleModal, setVisibleModal] = useState(false);

  if (windowSize.width == undefined) {
    windowSize.width = 390;
  }

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(EPagesRoutes.SearchResult + '?search=' + e.target.value);
  };

  const onChangeFilters = (data: TFilterData) => {
    console.log(data);
  };

  return (
    <div className={cx.wrapper}>
      {windowSize?.width >= 586 && (
        <Input
          className={cx.input}
          value={router.query.search}
          onChange={onChangeSearch}
          placeholder="Search..."
        />
      )}

      <Heading tag="h2">
        По запросу{' '}
        {router.query.search?.length ? `“${router.query.search}”` : ''}найдено
        145 товаров
      </Heading>

      {windowSize?.width <= 586 && (
        <div className={cx.content}>
          <MobileFilters onChangeFilters={onChangeFilters} />
        </div>
      )}
      <div className={cx.content}>
        {windowSize?.width >= 586 && (
          <FiltersForProducts onChange={onChangeFilters} />
        )}
        <ProductFeed />
      </div>
    </div>
  );
};

export default SearchLayout;
