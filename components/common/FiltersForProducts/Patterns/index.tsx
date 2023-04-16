import { useContext, useEffect, useState } from 'react';

import Collapse from '@/components/common/Collapse';
import { CheckboxGroup, ICheckboxProps } from '@/components/common/Checkbox';
import {
  EPattern,
  FilterContext,
} from '@/components/common/FiltersForProducts/context';

import cx from '@/components/common/FiltersForProducts/index.module.scss';

const patterns: ICheckboxProps[] = [
  {
    label: 'лен',
    value: 'linen',
    id: 'linen',
    labelPlacement: 'right',
  },
  {
    label: 'клен',
    value: 'maple',
    id: 'maple',
    labelPlacement: 'right',
  },
  {
    label: 'бульон',
    value: 'bouillon',
    id: 'bouillon',
    labelPlacement: 'right',
  },
  {
    label: 'медальон',
    value: 'medallion',
    id: 'medallion',
    labelPlacement: 'right',
  },
];

const initialState: Record<EPattern, boolean> = {
  linen: false,
  maple: false,
  bouillon: false,
  medallion: false,
};

const Patterns = () => {
  const { setFilterData } = useContext(FilterContext);
  const [patternsValue, setPatterns] =
    useState<Record<EPattern, boolean>>(initialState);

  const onChange = (changedValue: Record<EPattern, boolean>) => {
    setPatterns((state) => {
      return {
        ...state,
        ...changedValue,
      };
    });
  };

  useEffect(() => {
    if (setFilterData) {
      const newValue: EPattern[] = Object.entries(patternsValue).flatMap(
        (item) => {
          if (item[1]) {
            return item[0] as EPattern;
          }
          return [];
        },
      );
      setFilterData({ patterns: newValue.length ? newValue : undefined });
    }
  }, [patternsValue]);

  return (
    <div className={cx.filterItem}>
      <Collapse
        title="узор"
        content={
          <CheckboxGroup
            checkboxList={patterns}
            groupName={'pattern'}
            direction={'vertical'}
            onChangeGroup={onChange}
          />
        }
      />
    </div>
  );
};

export default Patterns;
