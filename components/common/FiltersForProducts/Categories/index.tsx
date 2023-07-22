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
    const resTest = { [groupName]: changedValue };

    const r = categoriesVal;
    const optionsRes1 = r[groupName][subGroupName];
    const optionsRes2 = resTest[groupName][subGroupName];

    const ttt = Object.assign(optionsRes1, optionsRes2);

    r[groupName][subGroupName] = ttt;

    setCategoriesVal(JSON.parse(JSON.stringify(r)));

    setGroupNameVal(groupName);
    setSubGroupNameVal(subGroupName);
  };

  useEffect(() => {
    console.log('-------------------');
    const catCopy = JSON.parse(JSON.stringify(categoriesVal));

    // вот тут сейчас правильно, только На втором круге обхект превращается в массив  option1 превращается в 0 пгочему-то
    // Если убрать setGroupNameVal, setSubGroupNameVal - все работает обалденно

    const test = Object.entries(catCopy).map((el: any) => {
      let key = '';

      Object.keys(el[1]).map((el1: any) => {
        key = el1;
      });
      const res2Obj = Object.entries(catCopy[el[0]]).map((item) => {
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

      Object.fromEntries(res2Obj);

      el[1] = Object.fromEntries(res2Obj);

      console.log(el);
      console.log(el[1]); // вот тут правильно возвращается - как правильно вернуть, ТИПА {boots: Array(1)}

      // console.log(JSON.stringify(catCopy))
    });

    console.log(test);

    if (setFilterData) {
      if (groupNameVal && subGroupNameVal) {
        const activeArray = Object.entries(
          catCopy[groupNameVal][subGroupNameVal],
        ).map((item) => {
          if (item[1]) {
            return item[0] as any;
          }

          return [];
        });

        // console.log(activeArray)
        catCopy[groupNameVal][subGroupNameVal] = activeArray;
        setFilterData({ categories: catCopy });
      }
    }

    console.log('-------------------');
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
