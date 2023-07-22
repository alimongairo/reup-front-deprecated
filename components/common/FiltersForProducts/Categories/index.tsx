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
            label: 'Выделить все',
            value: 'all',
            id: 'all',
            labelPlacement: 'right',
          },
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
      {
        label: 'балетки',
        value: 'ballet',
        id: 'ballet',
        list: [
          {
            label: 'Выделить все',
            value: 'all',
            id: 'all',
            labelPlacement: 'right',
          },
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
            label: 'Выделить все',
            value: 'all',
            id: 'all',
            labelPlacement: 'right',
          },
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
    ballet: {
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

  const [categoriesVal, setCategoriesVal] = useState<any>(initialState);

  const onChange = (
    changedValue: Record<any, boolean>,
    groupName: string,
    subGroupName: string,
  ) => {
    // TODO: clean code
    if (Array.isArray(changedValue)) {
      changedValue.forEach((item: any) => {
        const changedInGroup = { [groupName]: JSON.parse(item) };
        const categoriesValAcc = categoriesVal;

        const optionsRes1 = categoriesValAcc[groupName][subGroupName];
        const optionsRes2 = changedInGroup[groupName][subGroupName];
        const optionsResult = Object.assign(optionsRes1, optionsRes2);

        categoriesValAcc[groupName][subGroupName] = optionsResult;

        setCategoriesVal(JSON.parse(JSON.stringify(categoriesValAcc)));
      });
    } else {
      const changedInGroup = { [groupName]: changedValue };
      const categoriesValAcc = categoriesVal;

      const optionsRes1 = categoriesValAcc[groupName][subGroupName];
      const optionsRes2 = changedInGroup[groupName][subGroupName];
      const optionsResult = Object.assign(optionsRes1, optionsRes2);

      categoriesValAcc[groupName][subGroupName] = optionsResult;

      setCategoriesVal(JSON.parse(JSON.stringify(categoriesValAcc)));
    }
  };

  const onChangeAll = (e: any) => {
    e.preventDefault();
    categories.forEach((item: any) => {
      item.list.forEach((item1: any) => {
        item1.list.forEach((item2: any) => {
          item2.checked = !item2.checked;
        });
      });
    });

    // если выбираем все, отдаем "all"
    setCategoriesVal('all');
  };

  useEffect(() => {
    if (setFilterData) {
      if (categoriesVal === 'all') {
        setFilterData({ categories: 'all' });
        return;
      }
      const categoriesValCopy = JSON.parse(JSON.stringify(categoriesVal));

      const test = Object.entries(categoriesValCopy).map((el: any) => {
        let key = '';

        Object.keys(el[1]).map((el1: any) => {
          key = el1;
        });

        const res2Obj = Object.entries(categoriesValCopy[el[0]]).map((item) => {
          const valReturner = (obj: any) => {
            let resMain = [] as any;
            Object.entries(obj).map((res: any) => {
              if (res[1]) {
                resMain.push(res[0]);
              }
            });

            return resMain;
          };

          item[1] = valReturner(item[1]);

          return item;
        });

        el[1] = Object.fromEntries(res2Obj);

        return el;
      });

      setFilterData({ categories: Object.fromEntries(test) });
    }
  }, [categoriesVal]);

  return (
    <div className={cx.filterItem}>
      <Text className={cx.subTitle} size="big">
        категории
      </Text>
      <button onClick={onChangeAll}>выделить все</button>
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
