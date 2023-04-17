import { useContext, useEffect, useState } from 'react';

import Collapse from '@/components/common/Collapse';
import { CheckboxGroup, ICheckboxProps } from '@/components/common/Checkbox';
import {
  ESeason,
  FilterContext,
} from '@/components/common/FiltersForProducts/context';

import cx from '@/components/common/FiltersForProducts/index.module.scss';

const seasons: ICheckboxProps[] = [
  {
    label: 'Лето',
    value: 'summer',
    id: 'summer',
    labelPlacement: 'right',
  },
  {
    label: 'Зима',
    value: 'winter',
    id: 'winter',
    labelPlacement: 'right',
  },
  {
    label: 'Осень',
    value: 'autumn',
    id: 'autumn',
    labelPlacement: 'right',
  },
  {
    label: 'Весна',
    value: 'spring',
    id: 'spring',
    labelPlacement: 'right',
  },
];

const seasonsInitial: Record<ESeason, boolean> = {
  summer: false,
  winter: false,
  autumn: false,
  spring: false,
};

const Seasons = () => {
  const { setFilterData } = useContext(FilterContext);

  const [seasonsValue, setSeasons] =
    useState<Record<ESeason, boolean>>(seasonsInitial);

  const onChange = (changedValue: Record<ESeason, boolean>) => {
    setSeasons((state) => {
      return {
        ...state,
        ...changedValue,
      };
    });
  };

  useEffect(() => {
    if (setFilterData) {
      const newValue: ESeason[] = Object.entries(seasonsValue).flatMap(
        (item) => {
          if (item[1]) {
            return item[0] as ESeason;
          }
          return [];
        },
      );
      setFilterData({ seasons: newValue.length ? newValue : undefined });
    }
  }, [seasonsValue]);

  return (
    <div className={cx.filterItem}>
      <Collapse
        title="сезон"
        content={
          <CheckboxGroup
            checkboxList={seasons}
            groupName={'seasons'}
            direction={'vertical'}
            onChangeGroup={onChange}
          />
        }
      />
    </div>
  );
};

export default Seasons;
