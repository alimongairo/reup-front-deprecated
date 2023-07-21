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

const initialState: Record<any, any> = {
  shoes: {
    boots: {
      option1: false,
      option2: false,
    },
  },
  accessories: {
    earrings: {
      option1: false,
      option2: false,
    },
  },
};

const Categories = () => {
  const { setFilterData } = useContext(FilterContext);

  const [groupNameVal, setGroupNameVal] = useState('');
  const [subGroupNameVal, setSubGroupNameVal] = useState('');

  const [categoriesVal, setCategoriesVal] = useState(initialState);

  const onChange = (
    changedValue: Record<any, boolean>,
    groupName: string,
    subGroupName: string,
  ) => {
    const res0 = (changedValue[groupName] as any)[subGroupName];
    const res = categoriesVal[groupName][subGroupName];
    (changedValue[groupName] as any)[subGroupName] = Object.assign(res, res0);

    // TODO: где-то тут багует
    setCategoriesVal((state) => {
      return {
        ...state,
        ...changedValue,
      };
    });

    setGroupNameVal(groupName);
    setSubGroupNameVal(subGroupName);
  };

  useEffect(() => {
    // тут правильно приходит "shoes", "boots"
    console.log('---------------');
    console.log(groupNameVal);
    console.log(subGroupNameVal);
    console.log('---------------');
  }, [groupNameVal, subGroupNameVal]);

  useEffect(() => {
    console.log(categoriesVal);
    // вот тут сейчас правильно, только На втором круге обхект превращается в массив  option1 превращается в 0 пгочему-то
    // Если убрать setGroupNameVal, setSubGroupNameVal - все работает обалденно

    if (setFilterData) {
      if (groupNameVal && subGroupNameVal) {
        const newValue = Object.entries(
          categoriesVal[groupNameVal][subGroupNameVal],
        ).flatMap((item) => {
          if (item[1]) {
            return item[0] as any;
          }
          return [];
        });

        categoriesVal[groupNameVal][subGroupNameVal] = newValue;
        setFilterData({ categories: categoriesVal });
      }
    }
  }, [categoriesVal, groupNameVal, subGroupNameVal]);

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
