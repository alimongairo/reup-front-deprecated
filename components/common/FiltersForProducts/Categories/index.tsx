import Text from '@/components/common/Text';
import CollapseCascade from '@/components/common/CollapseCascade';
import Image from 'next/image';
import minuse from 'static/icons/minuse.svg';
import cx from '@/components/common/FiltersForProducts/index.module.scss';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../context';
import cxM from '@/components/common/Collapse/index.module.scss';
import classNames from 'classnames';

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
const initialState = {
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
    if (Array.isArray(changedValue)) {
      changedValue.forEach((item: any) => {
        const changedInGroup = { [groupName]: JSON.parse(item) };
        const categoriesValAcc = categoriesVal;

        if (Object.keys(JSON.parse(item)[subGroupName]).includes('all')) {
          categories.forEach((item: any) => {
            item.list.forEach((item1: any) => {
              if (item1.value === subGroupName) {
                item1.list.forEach((item2: any) => {
                  item2.checked = !item2.checked;
                });
                setRefresh((prev) => !prev);
              }
            });
          });
        }
        if (categoriesValAcc !== 'all') {
          const optionsRes1 = categoriesValAcc[groupName][subGroupName];
          const optionsRes2 = changedInGroup[groupName][subGroupName];
          const optionsResult = Object.assign(optionsRes1, optionsRes2);

          categoriesValAcc[groupName][subGroupName] = optionsResult;

          setCategoriesVal(JSON.parse(JSON.stringify(categoriesValAcc)));
        }
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

  const [refresh, setRefresh] = useState<boolean>(true);
  const [isAll, setIsAll] = useState<boolean>(false);

  const onChangeAll = () => {
    setIsAll((prev) => !prev);
    setCategoriesVal('all');
  };

  useEffect(() => {
    categories.forEach((item: any) => {
      item.list.forEach((item1: any) => {
        item1.list.forEach((item2: any) => {
          item2.checked = isAll;
          setRefresh((prev) => !prev);
        });
      });
    });
  }, [isAll]);

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
      <div onClick={onChangeAll} className={cx.allBtn}>
        <div className={cx.icon}>
          <Image src={minuse} alt={'minuse'} className={cxM.minus} />
          <Image
            src={minuse}
            alt={'minuse'}
            className={classNames(cxM.minus, cxM.rotate)}
          />
        </div>
        <div>искать все</div>
      </div>
      {categories.map((category: any) => (
        <CollapseCascade
          key={category.id}
          content={category}
          onChange={onChange}
          refresh={refresh}
        />
      ))}
    </div>
  );
};

export default Categories;
