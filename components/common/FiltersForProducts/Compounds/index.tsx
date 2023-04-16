import { useContext, useEffect, useState } from 'react';

import Collapse from '@/components/common/Collapse';
import { CheckboxGroup, ICheckboxProps } from '@/components/common/Checkbox';
import {
  ECompound,
  FilterContext,
} from '@/components/common/FiltersForProducts/context';

import cx from '@/components/common/FiltersForProducts/index.module.scss';

const compounds: ICheckboxProps[] = [
  {
    label: 'Хлопок',
    value: 'cotton',
    id: 'cotton',
    labelPlacement: 'right',
  },
  {
    label: 'Cинтетика',
    value: 'synthetics',
    id: 'synthetics',
    labelPlacement: 'right',
  },
];

const Compounds = () => {
  const { setFilterData } = useContext(FilterContext);

  const [compoundsValue, setCompounds] = useState<Record<ECompound, boolean>>({
    cotton: false,
    synthetics: false,
  });

  const onChange = (changedValue: Record<ECompound, boolean>) => {
    setCompounds((state) => {
      return {
        ...state,
        ...changedValue,
      };
    });
  };

  useEffect(() => {
    if (setFilterData) {
      const newValue: ECompound[] = Object.entries(compoundsValue).flatMap(
        (item) => {
          if (item[1]) {
            return item[0] as ECompound;
          }
          return [];
        },
      );

      setFilterData({ compounds: newValue.length ? newValue : undefined });
    }
  }, [compoundsValue]);

  return (
    <div className={cx.filterItem}>
      <Collapse
        title="состав"
        content={
          <CheckboxGroup
            checkboxList={compounds}
            groupName={'compounds'}
            direction={'vertical'}
            onChangeGroup={onChange}
          />
        }
      />
    </div>
  );
};

export default Compounds;
