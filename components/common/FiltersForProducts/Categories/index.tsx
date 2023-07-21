import Text from '@/components/common/Text';
import CollapseCascade from '@/components/common/CollapseCascade';
import { CheckboxGroup } from '@/components/common/Checkbox';

import cx from '@/components/common/FiltersForProducts/index.module.scss';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../context';

const categories: any[] = [
  {
    label: 'обувь',
    value: 'shoes',
    id: 'shoes',
    list: [
      {
        label: 'сапоги',
        value: 'boots',
        id: 'boots',
        list: [
          {
            label: 'option1',
            value: 'option1',
            id: 'option1',
            labelPlacement: 'right',
          },
          {
            label: 'option2',
            value: 'option2',
            id: 'option2',
            labelPlacement: 'right',
          },
        ],
      },
    ],
  },
  {
    label: 'аксессуары',
    value: 'accessories',
    id: 'accessories',
    list: [
      {
        label: 'серьги',
        value: 'earrings',
        id: 'earrings',
        list: [
          {
            label: 'option1',
            value: 'option1',
            id: 'option1',
            labelPlacement: 'right',
          },
          {
            label: 'option2',
            value: 'option2',
            id: 'option2',
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
      <Text className={cx.subTitle} size="big">
        категории
      </Text>
      {categories.map((category: any) => (
        <CollapseCascade
          key={category.key}
          content={category}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Categories;
