import Input from '@/components/common/Input';

import cx from '@/components/common/FiltersForProducts/index.module.scss';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FilterContext } from '@/components/common/FiltersForProducts/context';

const Price = () => {
  const { setFilterData } = useContext(FilterContext);

  const [search, setSearch] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (setFilterData) {
      const newValue = search;

      setFilterData({ search: newValue.length ? newValue : undefined });
    }
  }, [search]);

  return (
    <div className={cx.filterItem}>
      <Input
        className={cx.search}
        value={search}
        onChange={onChange}
        placeholder="поиск"
      />
    </div>
  );
};

export default Price;
