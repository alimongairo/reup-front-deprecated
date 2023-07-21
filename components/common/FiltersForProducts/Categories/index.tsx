import Text from '@/components/common/Text';
import CollapseCascade from '@/components/common/CollapseCascade';
import { CheckboxGroup } from '@/components/common/Checkbox';

import cx from '@/components/common/FiltersForProducts/index.module.scss';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../context';

const categories: any[] = [
  {
    label: 'ttt обувь',
    value: 'smth',
    id: 'smth',
    list: [
      {
        label: 'label сапоги',
        value: 'all',
        id: 'all',
        list: [
          {
            label: 'trtrtrt smth point1',
            value: 'option1',
            id: 'smth',
            labelPlacement: 'right',
          },
          {
            label: 'trtrtrt smth point2',
            value: 'option2',
            id: 'smth',
            labelPlacement: 'right',
          },
        ],
      },
    ],
  },
];

const initialState: Record<any, boolean> = {
  option1: false,
  option2: false,
};

const Categories = () => {
  const { setFilterData } = useContext(FilterContext);

  const [categoriesVal, setCategoriesVal] = useState(initialState);

  const onChange = (changedValue: Record<any, boolean>) => {
    setCategoriesVal((state) => {
      return {
        ...state,
        ...changedValue,
      };
    });
  };

  useEffect(() => {
    if (setFilterData) {
      const newValue: any[] = Object.entries(categoriesVal).flatMap((item) => {
        if (item[1]) {
          return item[0] as any;
        }
        return [];
      });

      setFilterData({ categories: newValue.length ? newValue : undefined });
    }
  }, [categoriesVal]);

  return (
    <div className={cx.filterItem}>
      <CollapseCascade
        title={
          <Text className={cx.subTitle} size="big">
            категории
          </Text>
        }
        content={categories}
        onChange={onChange}
      />
    </div>
  );
};

export default Categories;
